'use client'

import { animVariants } from '@/constants/animVariants.constants'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion, Variant } from 'framer-motion'
import { useState } from 'react'
// #TODO This would typically come from app's state management
// Variants for the dropdown menu
// const dropdownVariants: Variants = {
// 	open: {
// 		clipPath: 'inset(0% 0% 0% 0% round 10px)',
// 		transition: {
// 			type: 'spring',
// 			bounce: 0,
// 			duration: 0.7,
// 			delayChildren: 0.3,
// 			staggerChildren: 0.05
// 		}
// 	},
// 	closed: {
// 		clipPath: 'inset(10% 50% 90% 50% round 10px)',
// 		transition: {
// 			type: 'spring',
// 			bounce: 0,
// 			duration: 0.3
// 		}
// 	}
// }

// // Variants for individual dropdown items
// const itemVariants: Variants = {
// 	open: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { type: 'spring', stiffness: 300, damping: 24 }
// 	},
// 	closed: {
// 		opacity: 0,
// 		y: 20,
// 		transition: { duration: 0.2 }
// 	}
// }

export default function AnimatedDropdown() {
	// Update unreadCount state based on notifications
	const [isOpen, setIsOpen] = useState(false)

	return (
		<DropdownMenuPrimitive.Root
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DropdownMenuPrimitive.Trigger asChild>
				<motion.button
					whileTap={{ scale: 0.97 }}
					onClick={() => setIsOpen(prev => !prev)}
					className='flex items-center rounded bg-blue-500 px-4 py-2 text-white'
				>
					Menu
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 }
						}}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}
						className='ml-2'
					>
						<svg
							width='15'
							height='15'
							viewBox='0 0 20 20'
						>
							<path d='M0 7 L 20 7 L 10 16' />
						</svg>
					</motion.div>
				</motion.button>
			</DropdownMenuPrimitive.Trigger>

			<AnimatePresence>
				{isOpen && (
					<DropdownMenuPrimitive.Content
						asChild
						forceMount
					>
						<motion.ul
							initial='closed'
							animate='open'
							exit='closed'
							variants={{
								open: animVariants.openDropdown as Variant,
								closed: animVariants.closedDropdown as Variant
							}}
							className='z-50 min-w-[8rem] overflow-hidden rounded-md border bg-secondary p-1 text-popover-foreground shadow-md'
							style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
						>
							{['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map(item => (
								<motion.li
									key={item}
									variants={{
										open: animVariants.openItemDropdown as Variant,
										closed: animVariants.closedItemDropdown as Variant
									}}
									className='cursor-pointer px-4 py-2 text-sm hover:bg-accent'
								>
									{item}
								</motion.li>
							))}
						</motion.ul>
					</DropdownMenuPrimitive.Content>
				)}
			</AnimatePresence>
		</DropdownMenuPrimitive.Root>
	)
}
