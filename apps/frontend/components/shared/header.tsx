import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui'
import { Input } from '../ui/input'
import { Container } from './container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('py-4', className)}>
			<Container className='flex items-center justify-between py-4 px-8 shadow-custom-drop rounded-full'>
				<div className='flex items-center gap-8'>
					<Input placeholder='Search' />

					<Button className='rounded-full'>Create an ad</Button>
				</div>

				<Image
					src='/logo.png'
					alt='Logo'
					width={56}
					height={56}
				/>

				<div className='flex items-center gap-8'>
					<Icon icon='lets-icons:favorite-light' />
					<Icon icon='mage:message-round' />
					<Icon icon='solar:bell-linear' />
					<Icon icon='solar:user-linear' />
				</div>
			</Container>
		</header>
	)
}
