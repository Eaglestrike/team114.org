import { bronzeSponsors, goldSponsors, inKindSponsors, partners, silverSponsors } from '@/app/data/sponsorsData';
import Image from 'next/image';

function SectionTitle({ title, color }: { title: string; color: string }) {
	return <p className={`text-4xl my-4 mt-10 ml-4 font-bold text-${color}`}>{title}</p>;
}

export default function SponsorsPage() {
	return (
		<div>
			<p className={'text-5xl m-4 pb-6'}>Sponsors</p>
			<div className={'p-4 bg-slate-900 m-4 rounded-md max-w-6xl mx-auto'}>
				<p className={'text-center text-3xl text-white'}>
					Team 114 would not be possible without the generous donation of our sponsors.
				</p>
				<p className={'text-center text-white mt-2'}>
					Interested? Read more here: <a href={'https://docs.google.com/document/d/1bZPDlrVWRtjtCxCHdrQo8Cva77OVnZ_W/edit'} className={'underline hover:text-blue-500'}>Sponsorship Prospectus</a>
				</p>
			</div>
			<div id={'partners'}>
				<SectionTitle title={'Partners ($5000+)'} color={'rose-600'} />
				<div className={'grid grid-cols-2 gap-x-8 p-4'}>
				{partners.map((partner) => (
						<a
							key={partner.name}
							href={partner.website}
							className={
								'relative aspect-square max-h-72 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-8 border-4 hover:border-red-500 hover:scale-125 duration-300 ease-in-out'
							}
						>
							<Image
								src={'/sponsors/' + partner.logo}
								alt={partner.name}
								fill={true}
								style={{ objectFit: 'contain' }}
							/>
						</a>
					))}
				</div>
			</div>
			<div id={'gold'}>
				{/*<p className={"text-4xl text-yellow-500 font-bold"}>Gold ($2500-$4999)</p>*/}
				<SectionTitle title={'Gold ($2500-$4999)'} color={'yellow-500'} />
				<div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>
					{goldSponsors.map((partner) => (
						<a
							key={partner.name}
							href={partner.website}
							className={
								'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
							}
						>
							<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
						</a>
					))}
				</div>
			</div>
			<div id={'silver'}>
				{/*<p className={"text-4xl text-gray-400 font-bold"}>Silver ($1000-$2499)</p>*/}
				<SectionTitle title={'Silver ($1000-$2499)'} color={'gray-400'} />
				<div className={'flex flex-row overflow-auto gap-x-8'}>
					{silverSponsors.map((partner) => (
						<a
							key={partner.name}
							href={partner.website}
							className={
								'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-gray-400 hover:scale-110 duration-300 ease-in-out'
							}
						>
							<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
						</a>
					))}
				</div>
			</div>
			<div id={'bronze'}>
				{/*<p className={"text-4xl text-amber-600 font-bold"}>Bronze ($0-$1000)</p>*/}
				<SectionTitle title={'Bronze ($0-$1000)'} color={'amber-600'} />
				<div className={'flex flex-row overflow-auto gap-x-8'}>
					{bronzeSponsors.map((partner) => (
						<a
							key={partner.name}
							href={partner.website}
							className={
								'bg-white mx-auto w-1/3 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-amber-600 hover:scale-110 duration-300 ease-in-out'
							}
						>
							<Image
								src={'/sponsors/' + partner.logo}
								alt={partner.name}
								width={200}
								height={300}
								className={'my-auto'}
							/>
						</a>
					))}
				</div>
			</div>

			<div id={'in-kind'}>
				{/*<p className={"text-4xl text-white font-bold"}>In-Kind</p>*/}
				<SectionTitle title={'In-Kind'} color={'gray-400'} />
				<div className={'flex flex-row overflow-auto gap-x-8'}>
					{inKindSponsors.map((partner) => (
						<a
							key={partner.name}
							href={partner.website}
							className={
								'bg-white mx-auto w-1/3 rounded-3xl flex items-center justify-center p-4 hover:scale-110 duration-300 ease-in-out'
							}
						>
							<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
