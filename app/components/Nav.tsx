'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Nav() {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [y, setY] = useState(0);
	const handleScroll = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				setY(-100);
			} else {
				setY(0);
			}
			setLastScrollY(window.scrollY);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<motion.div
			className={'w-full fixed bg-slate-900 z-40 border-b-2'}
			animate={{ y }}
			transition={{ ease: 'easeOut', duration: 0.7 }}
		>
			<nav
				className={
					'flex flex-row justify-end gap-x-5  p-4 bg-slate-800 bg-opacity-95  border-slate-400' +
					'uppercase text-white font-semibold'
				}
			>
				<a href="/" className={'hover:text-sky-300 hover:font-extrabold hover:drop-shadow-lg'}>
					Home
				</a>
				<a href="/about" className={'hover:text-blue-300 hover:font-extrabold'}>
					About
				</a>
				<a href="/snoopy" className={'hover:text-blue-300 hover:font-extrabold'}>
					Snoopy
				</a>
				<a href="/sponsors" className={'hover:text-blue-300 hover:font-extrabold'}>
					Sponsors
				</a>
			</nav>
		</motion.div>
	);
}
