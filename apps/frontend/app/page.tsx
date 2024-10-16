import { Button } from '@/components/ui/button'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js logo'
					width={180}
					height={38}
					priority
				/>
				<ol>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>{' '}
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>{' '}
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>{' '}
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>{' '}
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>{' '}
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>
						Get started by editing <code>app/page.tsx</code>
					</li>
					<li>Save and see your changes instantly.</li>
					<li>
						<svg
							width='36'
							height='32'
							viewBox='0 0 36 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M28.3329 16.0001C28.3349 17.6194 28.0174 19.2232 27.3985 20.7195C26.7796 22.2159 25.8715 23.5754 24.7262 24.7201C23.5804 25.8662 22.2199 26.7752 20.7225 27.3952C19.2251 28.0152 17.6202 28.334 15.9995 28.3334C14.2553 28.3373 12.5302 27.9691 10.9395 27.2534L5.78354 28.0161C5.52754 28.0579 5.26521 28.0365 5.01933 27.9539C4.77344 27.8713 4.55145 27.7299 4.37262 27.542C4.19379 27.3541 4.06354 27.1254 3.99318 26.8758C3.92282 26.6261 3.91448 26.363 3.96888 26.1094L4.68488 20.8787C4.0038 19.343 3.65659 17.6801 3.66621 16.0001C3.66414 14.3808 3.98166 12.777 4.60056 11.2807C5.21946 9.78431 6.12758 8.42481 7.27288 7.28008C8.41873 6.13397 9.77923 5.22493 11.2766 4.60493C12.774 3.98494 14.3789 3.66613 15.9995 3.66675C19.2724 3.66697 22.4112 4.96662 24.7262 7.28008C25.8709 8.42525 26.7787 9.78483 27.3975 11.2811C28.0164 12.7773 28.3342 14.3809 28.3329 16.0001Z'
								stroke='black'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<rect
								x='18'
								y='0'
								width='18'
								height='18'
								rx='9'
								fill='#4645AF'
							/>
							<text
								x='27'
								y='13'
								font-family='Verdana'
								font-size='12'
								fill='white'
								text-anchor='middle'
							>
								2
							</text>
						</svg>
					</li>
				</ol>

				<div className={styles.ctas}>
					<a
						className={styles.primary}
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							className={styles.logo}
							src='/vercel.svg'
							alt='Vercel logomark'
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.secondary}
					>
						Read our docs
					</a>
				</div>
				<Button className={styles.secondary}>Open alert</Button>
			</main>
			<footer className={styles.footer}>
				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/file-text.svg'
						alt='File icon'
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/window.svg'
						alt='Window icon'
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						aria-hidden
						src='/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	)
}
