import Image from "next/image";
import IntroSection from "@/app/components/IntroSection";
import AboutBlurb from "@/app/components/AboutBlurb";

export default function Home() {
  return (
    <main className={"bg-black text-white"}>
        <IntroSection />
        <AboutBlurb />
    </main>
  );
}
