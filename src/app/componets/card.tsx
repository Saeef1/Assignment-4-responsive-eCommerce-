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
let rate: number = 2;



const pad = `py-[6px] px-[14px] `;

const cards: cardsProps[] =
    [{
        id: 1,
        img: '/componets assets/1img.png',
        title: 'T-shirt WITH TAPE DETAILS',
        price: 120,
        rating: 4.5,

    },
    {
        id: 2,
        img: '/componets assets/2img.png',
        title: 'Skinny Fit Jeans',
        price: 240,
        rating: 3.5,
        padding: pad,
        discount: `20%`,
        deduction: `$260`
    },
    {
        id: 3,
        img: '/componets assets/3img.png',
        title: 'Checkered Shirt',
        price: 180,
        rating: 4.5,

    },
    {
        id: 4,
        img: '/componets assets/4img.png',
        title: 'Sleeve Striped T-shirt',
        price: 130,
        deduction: `$160`,
        rating: 4.5,
        padding: pad,
        discount: `30%`
    }]


const Card = cards.map((Card: cardsProps) => {
    const { padding, id, img, title, price, rating, deduction, discount } = Card;
    const stars = (rating / 5) * 122;
    const gapCal = rating * 5
    const width = stars - gapCal
    return <>
        <div className="flex flex-col sm:gap-4 gap-[10px] hover:opacity-75" key={id}>
            <Image
                src={img}
                alt="shirt"
                width={198}
                height={200}
                objectPosition="center"
                className=" overflow-hidden object-cover w-[198px] h-[200px] sm:w-[295px] sm:h-[298px] rounded-[20px] "
            />
            <div className="flex flex-col gap-[6] sm:gap-2">
                <h2 className="font-bold text-base sm:text-[20px] sm:leading-[27px]">
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

const Cardlist = () => {
    return <>{Card}</>
}
export default Cardlist; 