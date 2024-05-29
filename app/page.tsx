import Image from "next/image";
import IntroSection from "@/app/components/IntroSection";
import AboutPage from "@/app/about/page";

export default function Home() {
  return (
    <main className={"bg-black text-white"}>
      <IntroSection />
        <AboutPage />
    </main>
  );
}
