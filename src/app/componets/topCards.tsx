import Image from "next/image";
type cardsProps = {
    id: number,
    img: string,
    title: string,
    price: number,
    rating: number,
    deduction?: string,
    discount?: string,
    padding?: string
}
const pad = "py-[6px] px-[14px] ";

const trend: cardsProps[] =
    [{
        id: 5,
        img: '/componets assets/5img.png',
        title: 'Vertical Striped Shirt',
        price: 221,
        deduction:`$232`,
        rating: 5.0,
        padding: pad,
        discount:`20%`
    },
    {
        id: 6,
        img: '/componets assets/6img.png',
        title: 'Courage Graphic T-shirt',
        price: 145,
        rating: 4.0, 
    }, {
        id: 7,
        img: '/componets assets/7img.png',
        title: 'Loose Fit Bermuda Shorts',
        price: 80,
        rating: 3.0,
    },
    {
        id: 8,
        img: '/componets assets/8img.png',
        title: 'Faded Skinny Jeans',
        price: 210,
        rating: 4.5,
    }]


const top = trend.map((Card: cardsProps) => {
    const { padding, id, img, title, price, rating, deduction, discount } = Card;
    const stars = (rating / 5) * 122;
    const gapCal = rating * 5
    const width = stars - gapCal
    return <>
        <div className="flex flex-col sm:gap-4 gap-[10px] hover:opacity-75 " key={id}>
            <Image
                src={img}
                alt="shirt"
                width={295}
                height={298}
                objectPosition="center"
                className=" overflow-hidden object-cover w-[198px] h-[200px] sm:w-[295px] sm:h-[298px] rounded-[20px] "
            />
            <div className="flex flex-col gap-2">
                <h2 className="font-bold  text-base sm:text-[20px] sm:leading-[27px]">
                    {title}
                </h2>
                <div className="flex gap-[13px] w-[127px] sm:w-[150px]">
                <div style={{ width: `${width}px` }} className={` h-[21px] text-[#ffc633] text-[18px] overflow-hidden flex gap-[5px]`}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <span>{rating}/5</span>
                </div>
                <div className="flex gap-[10px]">
                    <p className="font-bold text-xl sm:text-[24px] sm:leading-[32.4px]">
                        ${price}
                    </p>
                    <p className="font-bold line-through opacity-40 text-xl sm:text-[24px] sm:leading-[32.4px]">
                        {deduction}
                    </p>
                    <button className={`${padding}font-medium text-[12px] rounded-[62px] leading-[16.2px] text-[#ff3333] bg-[#ffbfbf]`}>
                        {discount}
                    </button>
                </div>
            </div>
        </div>
    </>
})

const TrendList = () => {
    return <>{top}</>
}
export default TrendList;