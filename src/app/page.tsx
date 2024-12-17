import Header from "./header";
import Hero1 from "./hero1";
import Main from "./main";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center  font-[satoshi] font-normal sm:text-[16px] sm:leading-[21.6px] text-[14px] leading-[20px]">
      <div className="flex bg-black justify-center items-center w-[100%] h-[38px]">
        <p className="font-[satoshi] font-normal text-[12px] leading-[16.2px] sm:text-[14px] sm:leading-[18.9px] text-white">Sign up and get 20% off to your first order. <span className="font-mediam underline">Sign Up Now</span></p>

        <svg className="hidden sm:inline-block absolute right-[100px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32812L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="white" />
        </svg>

      </div>
      <Header />
      <Hero1 />
      <Main />
      <Hero2 />
      <Hero3 />
      <Footer />

    </div>
  )
}