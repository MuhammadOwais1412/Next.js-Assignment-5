import Image from "next/image"
import Header from "../components/Header"

function HomePage() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-4 md:m-12">
          <h1 className="font-bold text-2xl md:text-[40px] leading-tight">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="font-medium text-lg md:text-3xl text-[#787054] mt-4">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className="w-full md:w-72 bg-[#A29875] font-medium text-[#fff] text-xl md:text-3xl rounded-[10px] p-[10px] mt-6">Explore Now</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-start m-4 md:m-12 relative">
          <div className="w-[300px] h-[400px] md:w-[442px] md:h-[611px] border-[1px] border-white absolute m-5 rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px] "></div>
          <Image src={"/images/hero.svg"}
            alt="hero image"
            width={490}
            height={667}
            className="rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px]"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage