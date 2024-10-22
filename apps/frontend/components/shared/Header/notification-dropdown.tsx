import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { animVariants } from '@/constants/animVariants.constants'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion, Variant } from 'framer-motion'
import { Bell } from 'lucide-react'
import { useState } from 'react'

// This would typically come from your app's state management
const notifications = [
	{
		id: 1,
		message: 'New message from John',
		time: '5 minutes ago',
		read: false
	},
	{
		id: 2,
		message: 'You have a new follower',
		time: '1 hour ago',
		read: false
	},
	{
		id: 3,
		message: 'Your order has been shipped',
		time: '2 hours ago',
		read: true
	},
	{ id: 4, message: 'Payment received', time: '1 day ago', read: true }
]

export default function NotificationDropdown() {
	const [isOpen, setIsOpen] = useState(false)

	const unreadCount = notifications.filter(n => !n.read).length

	return (
		<DropdownMenu
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='relative'
				>
					<Bell />
					{unreadCount > 0 && (
						<span className='absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
							{unreadCount}
						</span>
					)}
				</Button>
			</DropdownMenuTrigger>
			<AnimatePresence>
				{isOpen && (
					<DropdownMenuContent
						forceMount
						className='w-80'
					>
						<motion.ul
							initial='closed'
							animate='open'
							exit='closed'
							variants={{
								open: animVariants.openDropdown as Variant,
								closed: animVariants.closedDropdown as Variant
							}}
							className='motion.ul z-50 rounded-md border bg-secondary p-1 text-popover-foreground shadow-md'
							style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
						>
							<DropdownMenuLabel>Notifications</DropdownMenuLabel>
							{notifications.map(notification => (
								<DropdownMenuItem className='flex flex-col items-start rounded-md border p-1 px-4 py-2 shadow-md'>
									<div className='flex w-full justify-between'>
										<span
											className={`font-medium ${notification.read ? 'text-muted-foreground' : ''}`}
										>
											{notification.message}
										</span>
										{!notification.read && (
											<span className='h-2 w-2 rounded-full bg-primary'></span>
										)}
									</div>
									<span className='text-xs text-muted-foreground'>
										{notification.time}
									</span>
								</DropdownMenuItem>
							))}
						</motion.ul>
					</DropdownMenuContent>
				)}
			</AnimatePresence>
		</DropdownMenu>
	)
}
