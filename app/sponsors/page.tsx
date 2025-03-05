import { bronzeSponsors, goldSponsors, inKindSponsors, partners, silverSponsors } from '@/app/data/sponsorsData';
import Image from 'next/image';

function SectionTitle({ title, color }: { title: string; color: string }) {
	return <p className={`text-4xl my-4 mt-10 ml-4 font-bold text-${color}`}>{title}</p>;
}

export default function SponsorsPage() {
	return (
		<div className={'pt-12'}>
			<p className={'text-5xl m-4 pb-6'}>Sponsors</p>
			<div className={'p-4 bg-slate-900 m-4 rounded-md max-w-6xl mx-auto'}>
				<p className={'text-center text-3xl text-white'}>
					Team 114 would not be possible without the generous support of our sponsors.
				</p>
				<p className={'text-center text-white mt-2'}>
					Interested? Read more here:{' '}
					<a
						href={'https://docs.google.com/document/d/1bZPDlrVWRtjtCxCHdrQo8Cva77OVnZ_W/edit'}
						className={'underline hover:text-blue-500'}
					>
						Sponsorship Prospectus
					</a>
				</p>
			</div>
			<div id={'partners'}>
				<SectionTitle title={'Partners ($5000+)'} color={'rose-600'} />
				{partners && partners.length ?
					( <div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>{partners.map((partner) => (
							<a
								key={partner.name}
								href={partner.website}
								className={
									'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
								}
							>
								<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
							</a>

						)) }</div>
					)
					:
					(<text className={"p-5 text-center font-bol text-3xl"}>Become the first Partner Today!</text>)
				}
			</div>
			<div id={'gold'}>
				{/*<p className={"text-4xl text-yellow-500 font-bold"}>Gold ($2500-$4999)</p>*/}
				<SectionTitle title={'Gold ($2500-$4999)'} color={'yellow-500'} />
				{goldSponsors && goldSponsors.length>0 ?
					( <div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>{goldSponsors.map((partner) => (
							<a
								key={partner.name}
								href={partner.website}
								className={
									'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
								}
							>
								<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
							</a>

						)) }</div>
					)
					:
					(<text className={"p-5 text-center font-bol text-3xl"}>Become the first Gold Sponsor Today!</text>)
				}
			</div>
			<div id={'silver'}>
				{/*<p className={"text-4xl text-gray-400 font-bold"}>Silver ($1000-$2499)</p>*/}
				<SectionTitle title={'Silver ($1000-$2499)'} color={'gray-400'} />
				{silverSponsors && silverSponsors.length>0 ?
					( <div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>{silverSponsors.map((partner) => (
							<a
								key={partner.name}
								href={partner.website}
								className={
									'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
								}
							>
								<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
							</a>

							)) }</div>
					)
					:
					(<text className={"p-5 text-center font-bol text-3xl"}>Become the first Silver Sponsor Today!</text>)
				}
			</div>
			<div id={'bronze'}>
				{/*<p className={"text-4xl text-amber-600 font-bold"}>Bronze ($0-$1000)</p>*/}
				<SectionTitle title={'Bronze ($0-$1000)'} color={'amber-600'} />
				{bronzeSponsors && bronzeSponsors.length>0 ?
					( <div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>{bronzeSponsors.map((partner) => (
							<a
								key={partner.name}
								href={partner.website}
								className={
									'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
								}
							>
								<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
							</a>

						)) }</div>
					)
					:
					(<text className={"p-5 text-center font-bol text-3xl"}>Become the first Bronze Sponsor Today!</text>)
				}
			</div>

			<div id={'in-kind'}>
				{/*<p className={"text-4xl text-white font-bold"}>In-Kind</p>*/}
				<SectionTitle title={'In-Kind'} color={'gray-400'} />
				{inKindSponsors && inKindSponsors.length > 0 ?
					( <div className={'flex flex-row flex-grow overflow-visible gap-x-8 max-w-4xl mx-auto'}>{inKindSponsors.map((partner) => (
							<a
								key={partner.name}
								href={partner.website}
								className={
									'relative h-40 bg-white mx-auto w-3/4 rounded-3xl flex items-center justify-center m-4 p-4 border-4 hover:border-yellow-500 hover:scale-110 duration-300 ease-in-out'
								}
							>
								<Image src={'/sponsors/' + partner.logo} alt={partner.name} width={200} height={300} />
							</a>

						)) }</div>
					)
					:
					(<text className={"p-5 text-center font-bol text-3xl"}>Become the first in kind Sponsor Today!</text>)
				}
			</div>
		</div>
	);
}
