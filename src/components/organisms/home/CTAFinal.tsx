const CTAFinal = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <div className="text-center text-[64px] font-medium leading-[80px] max-w-[690px]">Ready to make your cocoa traceable?</div>
      <div className="flex items-center gap-7">
        <div className="flex gap-4 h-11 max-w-44.75 rounded-r6 pl-5.5 pr-1.5 py-1 items-center justify-between bg-cocoa w-full text-white text-[14px] font-medium">
          <div className="text-nowrap">Get Started</div>
          <div className="w-8 h-8 shrink-0 rounded-full bg-white shrink-0"></div>
        </div>
        <div className="flex gap-4 h-11 max-w-44.75 rounded-r6 pl-5.5 pr-1.5 py-1 items-center justify-between bg-cocoa-10 w-full text-cocoa-80 text-[14px] font-medium">
          <div className="text-nowrap">Contact us</div>
          <div className="w-8 h-8 shrink-0 rounded-full bg-cocoa-10"></div>
        </div>
      </div>
    </div>
  )
}

export default CTAFinal
