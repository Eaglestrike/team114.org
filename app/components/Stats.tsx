// Numbers counted from The Blue Alliance team history (Nov 2026).
const stats = [
	{ value: '60', label: 'Students' },
	{ value: '5', label: 'Event wins' },
	{ value: '46', label: 'Awards' },
	{ value: '1997', label: 'Competing since' },
];

export default function Stats() {
	return (
		<div className={'mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-14'}>
			{stats.map((stat) => (
				<div key={stat.label} className={'text-left'}>
					<p className={'text-5xl sm:text-6xl font-extrabold leading-none tracking-tight'}>{stat.value}</p>
					<p className={'mt-2 border-t border-white/50 pt-1 text-sm text-white/85'}>{stat.label}</p>
				</div>
			))}
		</div>
	);
}
