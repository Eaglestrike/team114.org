import Image from 'next/image';
import IntroSection from '@/app/components/IntroSection';
import AboutBlurb from '@/app/components/AboutBlurb';
import MeetTheRobot from '@/app/components/MeetTheRobot';
import Carousel from '@/app/components/Carousel';
import TextMove from "@/app/components/TextMove";
export default function Home() {
	return (
		<main className={'bg-black text-white'}>
			<IntroSection />
			<AboutBlurb />
			<MeetTheRobot />

		</main>
	);
}
