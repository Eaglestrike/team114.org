import IntroSection from '@/app/components/IntroSection';
import AboutBlurb from '@/app/components/AboutBlurb';
import MeetTheRobot from '@/app/components/MeetTheRobot';

export default function Home() {
	return (
		<div className="bg-slate-900 text-white">
			<IntroSection />
			<AboutBlurb />
			<MeetTheRobot />
		</div>
	);
}
