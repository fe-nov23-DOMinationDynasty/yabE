import { Header } from '@/components/shared'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE_NAME } from '../constants/seo.constants'
import './globals.css'
import { Providers } from './providers'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono'
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
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
