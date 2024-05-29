import Image from "next/image";

export default function AboutPage() {
    return (
        <div className={"mx-14"}>
            <p className={"my-2 text-4xl font-bold text-center"}>About Us</p>
            <div className={"bg-green-400"}>
                <div>
                    Team 114, also known as Eaglestrike, is the official robotics team of Los Altos High School. Founded
                    in 1997, Eaglestrike was one of the first teams to be part of the FIRST Robotics Competition (FRC)
                    series.
                </div>
                <div className={"bg-green-400 flex flex-row flex-1 bg-blue-400 max-h-3 max-w-1"}>
                    <Image className={'p-3'} src={"/robotwork.jpg"} alt={"robotwork"} objectFit='contain' layout='fill'/>

                    <div className={'flex-1 bg-red-400 p-4'}>
                        <p className={'text-3xl'}>Student Built</p>
                        <p className={""}>amongus amongus amongus amongus amongus amongus amongus amongus amongus amongus amongus amongus amongus amongus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
