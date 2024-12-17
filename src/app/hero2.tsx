import Image from "next/image"
import five from "../../public/assets/img5.png"
import four from "../../public/assets/img4.png"
import three from "../../public/assets/img3.png"
import two from "../../public/assets/img2.png"
export default function Hero2() {

    return <>
        <div className="sm:w-[1239px] sm:h-[866px] w-[358px] h-auto bg-[#F0F0F0] py-[70px] sm:px-16 px-6 mb-[80px] rounded-[40px] flex flex-col items-center gap-16">
            <h1 className="font-bold sm:text-[48px] sm:leading-[57.6px] text-[32px] leading-[36px] text-center">
                BROWSE BY DRESS STYLE
            </h1>
            <div className="sm:grid grid-cols-3 flex flex-col gap-5">
                <div className={`flex sm:h-[289px] h-[190px] relative duration-300 hover:shadow-2xl bg-white rounded-[20px] overflow-hidden w-[100%] pl-9 `}>
                    <h2 className="font-bold mt-3  z-10 absolute text-[36px] leading-[48.6px]">
                        Casual
                    </h2>
                    <Image
                        src={two}
                        alt="model pic"
                        width={370}
                        height={312}
                        className="absolute h-[289px] w-[100%] top-4 -right-[100px]  object-none  rounded-[20px]"
                    />
                </div>
                <div className={`flex col-span-2 bg-white rounded-[20px] duration-300 hover:shadow-2xl justify-between pl-9 overflow-hidden relative w-[100%] sm:h-[289px] h-[190px]`}>
                    <h2 className="absolute mt-3 font-bold inline-block text-[36px] leading-[48.6px] z-10">
                        Formal
                    </h2>
                    <Image
                        src={three}
                        alt="model pic"
                        className="  absolute sm:w-[770px] sm:h-[800px] w-[709px] h-[472px] object-none -top-[70%] -right-[50%] rounded-[20px]"
                    />
                </div>
                <div className={`flex col-span-2 bg-white rounded-[20px] duration-300 hover:shadow-2xl justify-between overflow-hidden w-[100%] pl-9 sm:h-[289px] h-[190px]`}>
                    <h2 className="font-bold mt-3 inline-block text-[36px] leading-[48.6px]">
                        Party
                    </h2>
                    <Image
                        src={four}
                        alt="model pic"
                        className=" object-none object-center w-[389px] sm:w-[770px] sm:h-[300px] rounded-[20px]"
                    />
                </div>
                <div className={`flex relative bg-white rounded-[20px] duration-300 hover:shadow-2xl justify-between overflow-hidden w-[100%] pl-9 sm:h-[289px] h-[190px]`}>
                    <h2 className="font-bold z-10 mt-3 inline-block absolute text-[36px] leading-[48.6px]">
                        Gym
                    </h2>
                    <Image
                        src={five}
                        alt="model pic"
                        className="absolute -top-[130px] -right-20 w-[285px] h-[425px] sm:w-[452px] sm:h-[577px] object-cover object-center rounded-[20px]"
                    />
                </div>
            </div>
        </div>

    </>
}