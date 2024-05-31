import Image from 'next/image';
import TextMove from '@/app/components/Test';

export default function AboutPage() {
	return (
		<div>
			<p>About us</p>
			<div className={'flex flex-row'}>
				{/*<Image src={"/robotwork.jpg"} alt={"Eagle"} width={200} height={200} quality={50}/>*/}
				<TextMove text1="About us" text2="amongus us" />
			</div>
		</div>
	);
}
