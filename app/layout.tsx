import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'EagleStrike',
	description: 'Official page of the Team114 FRC team',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav
					className={
						'flex flex-row justify-end gap-x-5 text-white p-4 bg-slate-900 bg-opacity-95 uppercase font-semibold'
					}
				>
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/snoopy">Snoopy</a>
					<a href="/sponsors">Sponsors</a>
				</nav>
				{children}
			</body>
		</html>
	);
}
