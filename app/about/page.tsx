import TextMove from '@/app/components/TextMove';
import Pardon from '@/app/components/Pardon';
import Meet from '@/app/components/Meet';
import Carousel from '@/app/components/Carousel';

export default function AboutPage() {
	return (
		<div className={'bg-slate-700 pb-14 '}>
			{/*<Pardon />*/}
			{/* h-screen w-full overflow-y-scroll overscroll-auto snap-y snap-always snap-mandatory*/}
			<p className={'text-7xl font-semibold text-white bg-slate-900 h-72 pt-28 pb-20'}>About Us</p>
			<div className={'gap-y-2'}>
				<div className={'h-5/6'}>
					<TextMove
						image={'/robotwork.jpg'}
						text1={'Student-Built'}
						text2={'Insert Text here'}
						side={'right'}
					/>
				</div>
				<div className={'h-1'}>
					<TextMove image={'/teamwork.jpg'} text1={'Student-Led'} text2={'Text Here'} side={'left'} />
				</div>
			</div>
			<Meet />
			<Carousel />
		</div>
	);
}
