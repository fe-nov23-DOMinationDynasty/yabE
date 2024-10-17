import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { BellIcon } from 'lucide-react'

export default function NotificationDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
				>
					<BellIcon className='' />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				sideOffset={16}
				className='right-0 max-h-[400px] w-80 overflow-auto'
				forceMount
			>
				<div className='grid gap-4 p-4'>
					<h4 className='font-medium leading-none'>Notifications</h4>
					<div className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
						<span className='flex h-2 w-2 translate-y-1.5 rounded-full bg-primary' />
						<div className='grid gap-1'>
							<p className='text-sm font-medium'>New order received</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								5 min ago
							</p>
						</div>
					</div>
					<div className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
						<span className='flex h-2 w-2 translate-y-1.5 rounded-full bg-primary' />
						<div className='grid gap-1'>
							<p className='text-sm font-medium'>Payment processed</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								10 min ago
							</p>
						</div>
					</div>
					<div className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
						<span className='flex h-2 w-2 translate-y-1.5 rounded-full bg-primary' />
						<div className='grid gap-1'>
							<p className='text-sm font-medium'>Item shipped</p>
							<p className='text-sm text-gray-500 dark:text-gray-400'>
								1 hour ago
							</p>
						</div>
					</div>
					<Button
						variant='outline'
						className='mt-4'
					>
						Mark All as Read
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
