import Image from "next/image";
import TextMove from "@/app/components/Test";
import Pardon from "@/app/components/Pardon";

export default function AboutPage() {
    return (
        <div className={"bg-slate-900"}>
            {/*<p>About us</p>*/}
            <div className={"snap-y"}>
                <Pardon />
                {/*<Image src={"/robotwork.jpg"} alt={"Eagle"} width={200} height={200} quality={50}/>*/}

            </div>
        </div>)
}
