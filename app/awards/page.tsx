import type { Metadata } from 'next';

type EventRecognition = {
	event: string;
	awards: string[];
};

type AwardYear = {
	year: number;
	events: EventRecognition[];
};

export const metadata: Metadata = {
	title: 'Awards & Distinctions | Eaglestrike',
	description: 'A record of Team 114 Eaglestrike awards and competition results.',
};

const awardHistory: AwardYear[] = [
	{
		year: 2026,
		events: [
			{
				event: 'CA District San Francisco',
				awards: ['District Event Finalist', 'Autonomous Award sponsored by Google.org'],
			},
			{
				event: 'CA District Central Valley',
				awards: ['District Championship FIRST Leadership Award Semi-Finalist — Riya M'],
			},
			{
				event: 'FIRST California Northern State Championship',
				awards: ['FIRST Leadership Award Finalist — Riya M'],
			},
		],
	},
	{
		year: 2024,
		events: [
			{
				event: 'San Francisco Regional',
				awards: ['Regional Winners', 'Innovation in Control Award'],
			},
			{ event: 'Idaho Regional', awards: ['Regional Finalists'] },
		],
	},
	{
		year: 2023,
		events: [
			{
				event: 'Idaho Regional',
				awards: ['Innovation in Control Award', 'Regional Finalists'],
			},
		],
	},
	{
		year: 2022,
		events: [
			{
				event: 'Arizona North Regional',
				awards: [
					'Regional Winners',
					'Creativity Award sponsored by Rockwell Automation',
				],
			},
			{ event: 'Idaho Regional', awards: ['Regional Finalists'] },
		],
	},
	{
		year: 2020,
		events: [{ event: 'Los Angeles North Regional', awards: ['Regional Finalists'] }],
	},
	{
		year: 2019,
		events: [
			{
				event: 'Ventura Regional',
				awards: [
					'Innovation in Control Award sponsored by Rockwell Automation',
					'Regional Finalists',
					'Wildcard — FIRST Championship qualification',
				],
			},
		],
	},
	{
		year: 2017,
		events: [
			{
				event: 'Ventura Regional',
				awards: [
					'Regional Winners',
					'Innovation in Control Award sponsored by Rockwell Automation',
				],
			},
			{
				event: 'Silicon Valley Regional',
				awards: ['Innovation in Control Award sponsored by Rockwell Automation'],
			},
		],
	},
	{
		year: 2007,
		events: [
			{ event: 'Pacific Northwest Regional', awards: ['Johnson & Johnson Sportsmanship Award'] },
			{ event: 'Silicon Valley Regional', awards: ['Autodesk Visualization Award'] },
		],
	},
	{
		year: 2006,
		events: [
			{
				event: 'Pacific Northwest Regional',
				awards: [
					'Autodesk Visualization Award',
					'Delphi “Driving Tomorrow’s Technology” Award',
					'Regional Finalist',
				],
			},
			{
				event: 'Davis Sacramento Regional',
				awards: ['Radio Shack Innovation in Control Award'],
			},
			{ event: 'Championship', awards: ['Autodesk Visualization Honorable Mention'] },
		],
	},
	{
		year: 2005,
		events: [
			{
				event: 'Sacramento Regional',
				awards: ['Delphi “Driving Tomorrow’s Technology” Award', 'Regional Finalists'],
			},
			{
				event: 'Silicon Valley Regional',
				awards: ['RadioShack Innovation in Control Award'],
			},
		],
	},
	{
		year: 2004,
		events: [
			{ event: 'Sacramento Regional', awards: ['Judges’ Award'] },
			{
				event: 'Silicon Valley Regional',
				awards: ['Kleiner Perkins Caufield & Byers Entrepreneurship Award'],
			},
		],
	},
	{
		year: 2003,
		events: [
			{ event: 'Sacramento Regional', awards: ['Website Award'] },
			{ event: 'Pacific Northwest Regional', awards: ['J&J Sportsmanship'] },
		],
	},
	{
		year: 2002,
		events: [
			{ event: 'Silicon Valley Regional', awards: ['People’s Choice Animation Award'] },
			{ event: 'Championship', awards: ['Autodesk Award for Visualization'] },
		],
	},
];

export default function AwardsPage() {
	return (
		<main className="min-h-screen bg-slate-900 px-4 py-16 text-white md:px-8">
			<div className="mx-auto max-w-6xl">
				<h1 className="mb-16 border-b border-slate-700 pb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
					Awards &amp; Distinctions
				</h1>

				<div className="divide-y divide-slate-700/80">
					{awardHistory.map(({ year, events }) => (
						<section
							key={year}
							aria-labelledby={`year-${year}`}
							className="grid gap-6 py-10 md:grid-cols-[9rem_1fr] md:gap-10"
						>
							<h2
								id={`year-${year}`}
								className="text-3xl font-bold tabular-nums text-blue-400 md:sticky md:top-20 md:h-fit md:text-4xl"
							>
								{year}
							</h2>

							<div className="grid gap-4">
								{events.map(({ event, awards }) => (
									<article
										key={event}
										className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-sm sm:p-6"
									>
										<h3 className="text-xl font-semibold text-white">{event}</h3>
										<ul className="mt-4 space-y-3">
											{awards.map((award) => (
												<li key={award} className="flex gap-3 leading-7 text-slate-300">
													<span
														aria-hidden="true"
														className="mt-[0.7rem] h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
													/>
													<span>{award}</span>
												</li>
											))}
										</ul>
									</article>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</main>
	);
}
