import Image from 'next/image';

export default function MeetTheRobot() {
	return (
		<section className={'p-8'}>
			<div className={'flex flex-row gap-x-2'}>
				<p className={'uppercase font-semibold'}>Meet</p>
				<p className={'text-4xl font-mono'}>SN00PY</p>
			</div>
			<p className={'text-sm font-mono uppercase text-gray-500 mt-2'}>OUR 2024 ROBOT</p>
			<div
				className={
					'relative h-96 rounded-3xl my-10 border-2 border-black hover:border-red-500 mx-auto md:w-1/2'
				}
			>
				<a href={'/snoopy'}>
					<Image
						src={'/robot shadow.jpg'}
						alt={'robot'}
						fill={true}
						className={'rounded-3xl'}
						style={{ objectFit: 'contain' }}
					/>
				</a>
			</div>
			<div className={'flex flex-col sm:flex-row justify-evenly gap-x-8 gap-y-4 sm:gap-y-0 w-3/4 mx-auto'}>
				<div className={'flex-col bg-slate-900 p-8 pb-4 rounded-2xl border-2 border-slate-600 sm:w-1/3'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-gear-wide mx-auto"
						viewBox="0 0 16 16"
					>
						<path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
					</svg>
					<p className={'flex-1 font-bold pt-4 text-center'}>Swerve Drive</p>
				</div>
				<div className={'flex-col bg-slate-900 p-8 pb-4 rounded-2xl border-2 border-slate-600 sm:w-1/3'}>
					<p className={'text-4xl text-center font-mono'}>#1</p>
					<div className={'flex flex-row gap-x-1 justify-center'}>
						<a href={'https://www.thebluealliance.com/event/2024casf'}>
							<p className={'flex-1 font-bold pt-4 underline text-blue-500 underline-offset-2'}>SFR,</p>
						</a>
						<a href={'https://www.thebluealliance.com/event/2024idbo'}>
							<p className={'flex-1 font-bold pt-4 underline text-blue-500 underline-offset-2'}>Idaho</p>
						</a>
					</div>
				</div>
				<div className={'flex-col bg-slate-900 p-8 pb-4 rounded-2xl border-2 border-slate-600 sm:w-1/3'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-people-fill mx-auto"
						viewBox="0 0 16 16"
					>
						<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
					</svg>
					<p className={'flex-1 font-bold pt-4 text-center'}>Student Built. Always.</p>
				</div>
			</div>
		</section>
	);
}
