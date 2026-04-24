const Hero = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img src="./hero.png" className="absolute w-[94%] bottom-0 z-100" alt="" />
      <div className="z-1000 absolute w-full h-screen grid grid-cols-2 gap-6 px-16">

        <div className="flex flex-col items-start justify-end gap-30 pb-16">
          <div className="flex flex-col items-start justify-end gap-7">
            <div className="max-2xl:text-[38px] 2xl:text-[56px] text-cocoa font-medium">Every cocoa bean has a story.
              &nbsp; <span className="text-cocoa-60">We make</span> it visible.</div>
            <p className="max-2xl:text-[18px] max-2xl:leading-[28px] 2xl:text-[28px] text-cocoa font-normal">From remote farms to global markets, Kafara captures every step of the journey, turning invisible processes into trusted, verifiable data.</p>
            <div className="flex gap-4 max-2xl:h-11 2xl:h-16 max-2xl:max-w-44.75 2xl:max-w-58 max-2xl:rounded-r6 2xl:rounded-r12 pl-5.5 pr-1.5 py-1 items-center justify-between bg-cocoa w-full text-white max-2xl:text-[14px] 2xl:text-[18px] font-medium">
              <div className="">Get Started</div>
              <div className="max-2xl:w-8 max-2xl:h-8 2xl:w-12 2xl:h-12 rounded-full bg-white"></div>
            </div>
          </div>

          <div className="max-2xl:h-[125px] max-2xl:w- [438px] 2xl:h-[175px] 2xl:w-[550px] grid grid-cols-3 max-2xl:gap-3 2xl:gap-4">
            <div className="bg-harvest rounded-r8 flex flex-col text-[#000] flex items-center justify-center text-center max-2xl:text-[18px] 2xl:text-[20px]"><span className="font-semibold">400K</span> producers</div>
            <div className="bg-white rounded-r8 flex flex-col text-[#000] flex items-center justify-center text-center max-2xl:text-[18px] 2xl:text-[20px]"><span className="font-semibold">24M kg</span> of cocoa</div>
            <div className="bg-white rounded-r8 flex flex-col text-[#000] flex items-center justify-center text-center max-2xl:text-[18px] 2xl:text-[20px]"><span className="">Strong</span> growth</div>
          </div>
        </div>


        <div className="relative">
          <div className="absolute max-2xl:w-[311px] max-2xl:h-[315px] 2xl:w-[411px] 2xl:h-[415px] bg-cocoa rounded-r9 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid max-2xl:grid-rows-[94px_1fr] 2xl:grid-rows-[1.1fr_2fr]">
            <div className="flex flex-col gap-2 relative">
              <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white px-2 pt-1 tracking-[0%] flex"><div className="">Make cocoa traceable. Stay compliant with EUDR.</div>              <div className="max-2xl:w-8 max-2xl:h-8 2xl:w-12 2xl:h-12 rounded-full bg-white shrink-0"></div></div>
              <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 px-2 pt-1 ">Trakao helps African cocoa actors meet new global traceability standards.</div>
            </div>
            <div className="w-full h-full rounded-r7 overflow-hidden">
              <img src="./hero-image.png" className="w-full h-full object-cover" alt="hero image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
