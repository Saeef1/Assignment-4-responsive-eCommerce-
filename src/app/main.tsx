import Cardlist from "./componets/card";
import TrendList from "./componets/topCards";

const Main = () => {

    return <>
        <h1 className="mt-[72px] mb-[55px] text-[32px] leading-[38.4px] sm:text-[48px] sm:leading-[57.6px] font-bold ">
            NEW ARRIVALS
        </h1>

        <div className="flex gap-5 flex-wrap px-3 overflow-hidden h-[306px] sm:h-auto autoShow">
            <Cardlist />
        </div>

        <button className="mt-[36px] mb-16 sm:w-[218px] h-[52px] w-[358px] rounded-[62px] py-4 px-[54px] border-[1px] border-opacity-[10%]">
            <p className="font-medium text- ">View All</p>
        </button>

        <div className="w-[1240px] h-px bg-black opacity-10"></div>

        <h1 className="mt-[72px] mb-[55px] text-[32px] leading-[38.4px] sm:text-[48px] sm:leading-[57.6px] font-bold">
            TOP SELLING
        </h1>
        <div className="flex gap-5 flex-wrap px-3 overflow-hidden h-[306px] sm:h-auto autoShow">
            <TrendList />
        </div>

        <button className="mt-[36px] mb-20 sm:w-[218px] h-[52px] w-[358px]  rounded-[62px] py-4 px-[54px] border-[1px] border-opacity-[10%]">
            <p className="font-medium text- ">View All</p>
        </button>
    </>

}

export default Main;