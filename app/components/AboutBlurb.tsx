import Image from "next/image";

export default function AboutBlurb() {
    return (
        <div className={"px-10 flex-row py-10 bg-slate-900"}>
            <p className={"my-2 text-4xl font-bold text-left mb-5"}>About Us</p>
            <div className={"flex flex-col sm:flex-row h-96 gap-x-4 sm:gap-y-4"}>
                <div className={"relative flex-1"}>
                    <Image src={"/robotwork.jpg"} alt={"robotwork"} fill={true} style={{objectFit: 'contain'}} />
                </div>
                <div className={"flex-1 max-w-xl sm:text-xl mt-4 sm:mt-0"}>
                    Team 114, also known as Eaglestrike, is the official robotics team of Los Altos High School. Founded
                    in 1997, Eaglestrike was one of the first teams to be part of the FIRST Robotics Competition (FRC)
                    series.
                </div>
            </div>
            <div className={"w-full justify-end flex mt-4"}>
                <a className={"inline-flex flex-row p-4 py-3 bg-white hover:bg-blue-600 rounded-full group justify-center items-center gap-x-3"} href={"/about"}>
                    <p className={"text-black group-hover:text-white font-medium"}>Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-right fill-black group-hover:fill-white group-hover:stroke-white stroke-2 stroke-black group-hover:animate-pulse" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
