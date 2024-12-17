import Reviews from "./componets/reviews";
const Hero3 =()=>{
    return<>
    <div className=" sm:w-[1239px] w-[100%] px-6 flex flex-col gap-10">
    <h1 className="font-bold sm:leading-[57.6px] sm:text-[48px] text-[32px] leading-[36px] self-auto">OUR HAPPY CUSTOMERS</h1>
        <div className="flex flex-wrap gap-5 sm:mb-[170px] autoShow mb-[219px] sm:w-[1240px] w-[] sm:h-[241px] h-[186px] overflow-hidden">
            <Reviews />
        </div>
    </div>
    </>
}

export default Hero3;