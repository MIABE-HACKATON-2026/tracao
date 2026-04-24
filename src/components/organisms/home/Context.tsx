const Context = () => {
  return (
    <div className="grid grid-cols-[200px_1fr_200px] px-16 max-2xl:h-[518px] 2xl:h-[60vh]">
      <div className="flex flex-col items-start justify-between py-16">
        <img src="./logo-light.png" alt="" />
        <img src="./illustration1.png" className="2xl:w-[150px]" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10] 2xl:gap-[14px]">
        <div className="text-center text-[28px] 2xl:text-[32px] font-medium leading-[38px] text-cocoa">A growing industry facing <br />critical challenges</div>
        <div className="max-w-[506px] 2xl:max-w-[625px] text-center text-[18px] 2xl:text-[22px] leading-[28px] text-cocoa">Cocoa is a key economic driver in Togo, with over 400,000 producers and rapidly growing export potential. Yet, the sector lacks the digital infrastructure required to meet international traceability standards.</div>
      </div>
      <div className="flex flex-col items-start justify-end py-16">
        <img src="./illustration2.png" className="2xl:w-[150px]" alt="" />
      </div>
    </div>
  )
}

export default Context
