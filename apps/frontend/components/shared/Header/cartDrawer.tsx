'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

// This would typically come from your app's state management
const cartItems = [
	{ id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
	{ id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
	{ id: 3, name: 'Product 3', price: 39.99, quantity: 3 }
]

export default function CartDrawer() {
	const [isOpen, setIsOpen] = useState(false)

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='relative'
				>
					<ShoppingCart />
					<span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
						{quantity}
					</span>
				</Button>
			</SheetTrigger>

			<SheetContent
				side='right'
				className='w-[400px] sm:w-[540px]'
			>
				<SheetHeader>
					<SheetTitle>Your Cart</SheetTitle>
					<SheetDescription>
						You have {quantity} items in your cart
					</SheetDescription>
				</SheetHeader>
				<div className='mt-8 space-y-4'>
					{cartItems.map(item => (
						<div
							key={item.id}
							className='flex items-center justify-between'
						>
							<div>
								<h3 className='font-medium'>{item.name}</h3>
								<p className='text-sm text-gray-500'>
									Quantity: {item.quantity}
								</p>
							</div>
							<p className='font-medium'>
								${(item.price * item.quantity).toFixed(2)}
							</p>
						</div>
					))}
				</div>
				<SheetFooter className='mt-8'>
					<div className='flex w-full items-center justify-between'>
						<h3 className='text-lg font-semibold'>Total</h3>
						<p className='text-lg font-semibold'>${total.toFixed(2)}</p>
					</div>
				</SheetFooter>
				<div className='mt-8 flex justify-end space-x-4'>
					<SheetClose asChild>
						<Button variant='outline'>Close</Button>
					</SheetClose>
					<Button>Checkout</Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}
