'use client'

import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import { motion, useMotionValueEvent, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Container } from '../container'
import CartDrawer from './cartDrawer'
import NotificationDropdown from './notificationDropdown'
import { DropdownMenuDemo } from './profileDropdown'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const { scrollY } = useViewportScroll()
	const [isScrolled, setIsScrolled] = useState(false)

	// Update isScrolled state based on scroll position
	useMotionValueEvent(scrollY, 'change', latest => {
		setIsScrolled(latest > 50) // Adjust the threshold to your needs
	})

	console.log('Page scroll: ', scrollY)

	return (
		<motion.header
			className={cn('sticky inset-x-0 top-3 z-50 my-3', className)}
		>
			<Container className=''>
				<motion.div
					className={cn(
						'grid grid-cols-[1fr,auto,1fr] items-center justify-between gap-2 bg-background px-4 py-3',
						{ 'rounded-full shadow-custom-drop': isScrolled }
					)}
				>
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
						<CartDrawer />
						<DropdownMenuDemo />
					</div>

					{/* <Icon icon='lets-icons:favorite-light' />
					<Icon icon='mage:message-round' />
					<Icon icon='solar:bell-linear' />
					<Icon icon='solar:user-linear' /> */}
				</motion.div>
			</Container>
		</motion.header>
	)
}
