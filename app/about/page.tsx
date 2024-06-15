import TextMove from "@/app/components/TextMove";
import Pardon from "@/app/components/Pardon";
import Meet from "@/app/components/Meet";
import Carousel from "@/app/components/Carousel";
export default function AboutPage() {
    return (

        <div className={"bg-slate-900 py-14 "}>
            <Pardon />
            {/*/!* h-screen w-full overflow-y-scroll overscroll-auto snap-y snap-always snap-mandatory*!/*/}
            {/*<p className={"text-7xl font-semibold text-white py-20"}>About Us</p>*/}
            {/*<div className={"gap-y-2 bg-slate-700"}>*/}
            {/*    <div className={""}>*/}
            {/*        <TextMove image = {"/robotwork.jpg"}*/}
            {/*                  text1={"Student-Built"}*/}
            {/*                  text2={"Insert Text here"}*/}
            {/*                  side={"right"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={""}>*/}
            {/*        <TextMove image = {"/teamwork.jpg"}*/}
            {/*                  text1={"Student-Led"}*/}
            {/*                  text2={"Text Here"}*/}
            {/*                  side={"left"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"snap-start"}>*/}
            {/*<Meet />*/}
            {/*</div>*/}
            {/*<Carousel />*/}
        </div>)
}
