'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
motion

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children
}) => {
	return (
		<motion.div className={cn('mx-auto max-w-[1280px]', className)}>
			{children}
		</motion.div>
	)
}
