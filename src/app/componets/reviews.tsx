import Image from "next/image"
type reProps={
    title:string
    paragraph:string
    id:number
}
const data :reProps[]=[{
    title: "Sarah M.",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    id:11
},
{
    title:"Alex K.",
    paragraph:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    id:12
},
{
    title:"James L.",
    paragraph:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    id:13
}]

const Reviews = () => { 
    
    return (
    data.map((reviews:reProps)=>{
        const {id,title,paragraph} =reviews
return <>    
        <div key={id} className="sm:w-[400px] w-[358px] duration-300 hover:shadow-2xl bg-white sm:h-[240px] h-[186px] rounded-[20px] border-[1px] border-black border-opacity-10 sm:px-[32px] sm:py-[28px] p-6 flex flex-col justify-around">
            <div className='overflow-hidden text-[#ffc633] text-[22.58px] flex gap-[6.23px]'>
                <span className="">★</span>
                <span className="">★</span>
                <span className="">★</span>
                <span className="">★</span>
                <span className="">★</span>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold flex text-base sm:text-[20px] sm:leading-[22px]">
                    {title}
                    <Image
                     src="/tick.png"
                      alt="tick"
                      width={24}
                      height={24} />
                </h2>
                <p className="opacity-60">
                    {paragraph}
                </p>
            </div>
        </div>
    </>
    }
    ))
    
}

export default Reviews