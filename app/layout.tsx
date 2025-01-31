import type { Metadata } from 'next';
import './globals.css';
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer"
import { inter } from './fonts';

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
				{/*<div className={'w-screen fixed bg-slate-900 z-40 border-2 border-black'}>*/}
				{/*	<nav*/}
				{/*		className={*/}
				{/*			'flex flex-row justify-end gap-x-5 text-white p-4 bg-slate-900 bg-opacity-95 uppercase font-semibold'*/}
				{/*		}*/}
				{/*	>*/}
				{/*		<a href="/">Home</a>*/}
				{/*		<a href="/about">About</a>*/}
				{/*		<a href="/snoopy">Snoopy</a>*/}
				{/*		<a href="/sponsors">Sponsors</a>*/}
				{/*	</nav>*/}
				{/*</div>*/}
				<Nav />
				{children}
				{/*<Footer />*/}
			</body>
		</html>
	);
}
