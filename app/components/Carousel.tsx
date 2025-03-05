import React from 'react';
import Image from 'next/image';

export default function Carousel() {
	const sources = [
		{ description: 'Robot', image: '/2024SFR-091.jpg' },
		{ description: 'sus robot', image: '/Z62_8567.jpg' },
		{ description: 'Climb', image: '/Z62_8742.jpg' },
		{ description: 'Gang Signs', image: '/Z62_9413 (1).jpg' },
		{ description: 'alliance selection', image: '/Z62_9717.jpg' },
	];

	return (
		<div
			className={
				'border-y-2 p-2 border-blue-400 justify-self-center w-screen bg-slate-100 overflow-x-auto scroll snap-x snap-always snap-mandatory snap-center flex flex-1'
			}
		>
			{sources.map((source, index) => (
				<div className={'snap-center mx-2 w-1/2 flex-none'} key={index}>
					<Image
						height={'2000'}
						width={'2000'}
						src={'/team_pics' + source.image}
						alt={source.description}
						className={'object-cover rounded-2xl'}
						quality={80}
						priority
					/>
				</div>
			))}
		</div>
	);
}
