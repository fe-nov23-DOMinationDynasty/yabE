import {
	Cloud,
	Github,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	User,
	UserPlus,
	Users
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function ProfileDropdown() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<DropdownMenu
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
				>
					<User />
				</Button>
			</DropdownMenuTrigger>

			<AnimatePresence>
				{isOpen && (
					<DropdownMenuContent
						align='end'
						sideOffset={16}
						className='w-56'
						forceMount
					>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<User className='mr-2 h-4 w-4' />
								<span>Profile</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Users className='mr-2 h-4 w-4' />
								<span>Team</span>
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<UserPlus className='mr-2 h-4 w-4' />
									<span>Invite users</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											<Mail className='mr-2 h-4 w-4' />
											<span>Email</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<MessageSquare className='mr-2 h-4 w-4' />
											<span>Message</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<PlusCircle className='mr-2 h-4 w-4' />
											<span>More...</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem>
								<Plus className='mr-2 h-4 w-4' />
								<span>New Team</span>
								<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Github className='mr-2 h-4 w-4' />
							<span>GitHub</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LifeBuoy className='mr-2 h-4 w-4' />
							<span>Support</span>
						</DropdownMenuItem>
						<DropdownMenuItem disabled>
							<Cloud className='mr-2 h-4 w-4' />
							<span>API</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogOut className='mr-2 h-4 w-4' />
							<span>Log out</span>
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				)}
			</AnimatePresence>
		</DropdownMenu>
	)
}
