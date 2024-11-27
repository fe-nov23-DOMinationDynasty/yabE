import { Header } from '@/components/shared'
import { Toaster } from '@/components/ui/sonner'
import { MotionConfig } from 'framer-motion'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { SITE_NAME } from '../constants/seo.constants'
import './globals.css'
import { Providers } from './providers'

const unbounded = Unbounded({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-unbounded',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}` // %s - name of page
	},
	description: 'Best platform for buying, selling staff'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={unbounded.className}>
				<MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
					<Header />
					<Providers>
						{children}
						<Toaster
							theme='dark'
							position='bottom-right'
							duration={1500}
						/>
					</Providers>
				</MotionConfig>
				<Toaster />
			</body>
		</html>
	)
}
