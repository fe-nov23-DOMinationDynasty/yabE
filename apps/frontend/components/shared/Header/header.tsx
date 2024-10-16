import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Container } from '../container'
import NotificationDropdown from './notificationDropdown'
import { DropdownMenuDemo } from './profileDropdown'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn('my-3 fixed inset-x-0 z-50 bg-background', className)}
		>
			<Container className='grid grid-cols-[1fr_auto_1fr] items-center justify-between py-3 px-4 shadow-custom-drop rounded-full gap-2'>
				<div className='flex items-center gap-8 justify-self-start'>
					<Input placeholder='Search' />

					<Button>Create an ad</Button>
				</div>

				<Image
					src='/logo.svg'
					alt='Logo'
					width={40}
					height={40}
				/>

				<div className='flex items-center gap-4 justify-self-end'>
					<Button
						variant='ghost'
						size='icon'
					>
						<Icon icon='lets-icons:favorite-light' />
					</Button>

					<Button
						variant='ghost'
						size='icon'
					>
						<Icon icon='mage:message-round' />
					</Button>
					<NotificationDropdown />
					<DropdownMenuDemo />
				</div>

				{/* <Icon icon='lets-icons:favorite-light' />
					<Icon icon='mage:message-round' />
					<Icon icon='solar:bell-linear' />
					<Icon icon='solar:user-linear' /> */}
			</Container>
		</header>
	)
}
