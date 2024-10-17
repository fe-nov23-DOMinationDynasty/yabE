import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-react'

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
	const unreadCount = notifications.filter(n => !n.read).length

	return (
		<DropdownMenu>
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

			<DropdownMenuContent
				className='w-80'
				sideOffset={16}
			>
				<DropdownMenuLabel>Notifications</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{notifications.map(notification => (
					<DropdownMenuItem
						key={notification.id}
						className='flex flex-col items-start px-4 py-2'
					>
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
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
