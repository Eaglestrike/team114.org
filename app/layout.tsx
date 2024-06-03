"use client";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

const urlMap = {
	'/': 'Home',
	'/about': 'About',
	'/snoopy': 'Snoopy',
	'/sponsors': 'Sponsors',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	return (
		<html lang="en">
		<GoogleTagManager gtmId="G-DTSRV8YCHM" />
		<body className={inter.className}>
				<nav
					className={
						'flex flex-row justify-end gap-x-5 text-white p-4 bg-slate-900 bg-opacity-95 uppercase font-semibold'
					}
				>
					{
						Object.entries(urlMap).map(([url, name]) => (
							<a
								className={pathname === url ? 'underline' : ''}
								key={url} href={url}>{name}</a>
						))
					}
				</nav>
				{children}
			</body>
		</html>
	);
}
