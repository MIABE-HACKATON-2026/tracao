const Problem = () => {
  return (
    <div className="flex flex-col items-start gap-16 h-screen p-16">
      <div className="max-w-[364px] text-[32px] leading-[42px] 2xl:max-w-[420px] 2xl:text-[36px] 2xl:leading-[46px] font-medium  text-cocoa">Un système non préparé aux exigences mondiales</div>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full h-[185px] 2xl:h-[20vh] border border-2 border-cocoa rounded-r7 pl-20 py-2 pr-2 flex items-center justify-between">
          <div className="text-[#000] text-[26px] leading-[42px]">Absence de système national de traçabilité</div>
          <div className="h-full"><img src="./demand1.png" className="h-full" alt="" /></div>
        </div>
        <div className="w-full h-[185px] 2xl:h-[20vh] border border-2 border-cocoa rounded-r7 pl-20 py-2 pr-2 flex items-center justify-between">
          <div className="text-[#000] text-[26px] leading-[42px]">Collecte de données sur papier</div>
          <div className="h-full"><img src="./demand2.png" className="h-full" alt="" /></div>
        </div>
        <div className="w-full h-[185px] 2xl:h-[20vh] border border-2 border-cocoa rounded-r7 pl-20 py-2 pr-2 flex items-center justify-between">
          <div className="text-[#000] text-[26px] leading-[42px]">Risques de fraude et de commerce illicite</div>
          <div className="h-full"><img src="./demand3.png" className="h-full" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Problem
