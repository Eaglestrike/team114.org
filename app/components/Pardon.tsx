import React from 'react';
import Image from 'next/image';

export default function Pardon() {
	return (
		<div className={'flex flex-col h-screen bg-slate-600 align-middle w-screen p-6 rounded-2xl gap-y-3'}>
			<p className={'text-white text-center font-bold text-3xl'}>Pardon our Dust!</p>
			<p className={'text-white text-center'}>This page is currently under construction... Good things will come.</p>
			<div className={'flex-grow relative'}>
				<div className={'rounded-3xl overflow-hidden bg-red-400'}>
					<Image
						src={'/eaglework.jpeg'}
						alt={'Pardon Eagle'}
						fill={true}
						style={{ objectFit: 'contain', borderRadius: '3' }}
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
}
// fill={true} style={{objectFit: 'contain'}}
