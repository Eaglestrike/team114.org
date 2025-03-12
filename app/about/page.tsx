import TextMove from '@/app/components/TextMove';
import Pardon from '@/app/components/Pardon';
import Meet from '@/app/components/Meet';
import Carousel from '@/app/components/Carousel';
import Tilt from '@/app/components/Tilt';
import Image from "next/image";
import React from "react";

export default function AboutPage() {
	return (
		<div className={'bg-slate-700 pb-14 pb-10'}>
			<div className="flex bg-slate-900 flex-col pb-20">
				<div className={"bg-slate-600 px-12 pb-20 pt-32"}>
				<text className={"ml-8 text-left text-white text-8xl text-bold"}>About Us</text>
				<p className={"mx-8 text-left text-white text-xl mt-8"}>Team 114, also known as Eaglestrike, is the
					official robotics team of Los Altos High School. Founded in 1997, Eaglestrike was one of the first
					teams to be part of the FIRST Robotics Competition (FRC) series, joining in 1997.</p>
				<p className={"mx-8 text-left text-white text-xl my-4"}>Our team is student-led, with very little mentor intervention. Students take important leadership
					positions, design and build the robot on their own, and teach the next generation of students all
					types of skills to continue the traditions of Eaglestrike.</p>
				<p className={"mx-8 text-left text-white text-xl mb-8"}>As a career technical education (CTE) course, our goal is to prepare students for a career in the
					STEM field, more specifically engineering, design, or computer science.</p>
				</div>
					<div className="flex flex-row items-center justify-center py-20 relative">
						{/* Tilt Card on Left */}
						<div className="w-1/4 relative z-10 -mr-20">
							<Tilt>
								<div
									className="text-white font-light aspect-square flex flex-col items-center justify-center border border-white rounded-md p-10 bg-black/50 backdrop-blur-md gap-y-3">
									<p className="font-bold text-4xl text-left md:text-3xl sm:text-xl">Students Lead</p>
									<p className="text-left md:text-base sm:text-sm">
										With minimal adult intervention, students make their own choices from kickoff to
										competition. Every decision from design to picklist is made by student leads.
									</p>
								</div>
							</Tilt>
						</div>

						{/* Image on Right */}
						<div className="w-3/4 relative">
							<Image
								src="/team_pics/Z62_9717.jpg"
								alt="vir"
								width={1600}
								height={2400}
								className="w-full h-auto object-cover rounded-xl"
								quality={80}
							/>
						</div>
					</div>

					<div className="flex flex-row-reverse items-center justify-center py-20 px-4 relative">
						{/* Tilt Card on Left */}
						<div className="max-h-1/3 w-1/4 relative z-10 -ml-20">
							<Tilt>
								<div
									className="text-white font-light aspect-square flex flex-col justify-center border border-white rounded-md p-10 bg-black/50 backdrop-blur-md gap-y-3">
									<p className="font-bold text-left text-4xl md:text-3xl sm:text-xl">Students
										Learn</p>
									<p className="text-left md:text-base sm:text-sm">
										Team114 equips LAHS students with the skills necessary to thrive in their
										respective
										fields, offering specialized online courses.
									</p>
								</div>
							</Tilt>
						</div>

						{/* Image on Right */}
						<div className="w-3/4 relative">
							<Image
								src="/team_pics/driveteam.jpg"
								alt="driveteam"
								width={1600}
								height={2400}
								className="w-full h-auto object-cover rounded-xl"
								quality={80}
							/>
						</div>
					</div>

					<div className="flex flex-row items-center justify-center py-20 px-4 relative">
						{/* Tilt Card on Left */}
						<div className="max-h-1/3 w-1/4 relative z-10 -mr-20">
							<Tilt>
								<div
									className="text-white font-light aspect-square flex flex-col items-center justify-center border border-white rounded-md p-10 bg-black/50 backdrop-blur-md gap-y-3">
									<h3 className="font-bold text-6xl md:text-5xl sm:text-xl">Students</h3>
									<h3 className="font-bold text-7xl md:text-6xl sm:text-2xl">GROW</h3>

								</div>
							</Tilt>
						</div>

						{/* Image on Right */}
						<div className="w-3/4 relative">
							<Image
								src="/team_pics/Z62_9413 (1).jpg"
								alt="gangsigns"
								width={1600}
								height={2400}
								className="w-full h-auto object-cover rounded-xl"
								quality={80}
							/>
						</div>
					</div>
			</div>
	<Meet/>
	<div className={"p-9 pt-10"}>
		<text className={"text-center text-7xl pb-36"}>Media</text>
		<Carousel/>
	</div>
		</div>
	);
}
