const Hero = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img src="./hero.png" className="absolute w-[94%] bottom-0 z-100" alt="" />
      <div className="z-1000 absolute w-full h-screen grid grid-cols-2 gap-6 px-16">

        <div className="flex flex-col items-start justify-center gap-7">
          <div className="max-2xl:text-[38px] 2xl:text-[56px] text-cocoa font-medium">Every cocoa bean has a story.
            &nbsp; <span className="text-cocoa-60">We make</span> it visible.</div>
          <p className="max-2xl:text-[18px] max-2xl:leading-[28px] 2xl:text-[28px] text-cocoa font-normal">From remote farms to global markets, Kafara captures every step of the journey, turning invisible processes into trusted, verifiable data.</p>
          <div className="flex gap-4 max-2xl:h-11 2xl:h-16 max-2xl:max-w-44.75 2xl:max-w-58 max-2xl:rounded-r6 2xl:rounded-r12 pl-5.5 pr-1.5 py-1 items-center justify-between bg-cocoa w-full text-white max-2xl:text-[14px] 2xl:text-[18px] font-medium">
            <div className="">Get Started</div>
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
