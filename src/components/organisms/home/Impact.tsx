const Impact = () => {
  return (
    <div id="impact" className="flex flex-col items-start gap-16 h-screen p-16">
      <div className="max-w-[480px] text-[32px] leading-[42px] 2xl:text-[36px] 2xl:leading-[46px] font-medium  text-cocoa">Promouvoir la transparence et la durabilité</div>
      <div className="flex flex-col gap-5 w-full items-center">
        <div className="group duration-300 hover:w-full hover:text-harvest hover:bg-cocoa w-[92%] h-[124.5] 2xl:h-[15vh] text-cocoa rounded-r9 pl-20 py-2 pr-2 flex items-center justify-between bg-cocoa-10">
          <div className="text-[26px] leading-[42px]">Maintenir l'accès aux marchés européens</div>
          <div className="opacity-0 group-hover:opacity-100 duration-300 h-full w-[191px]"><img src="./trace3.png" className="w-full object-cover h-full rounded-r7" alt="" /></div>
        </div>
        <div className="group duration-300 hover:w-full hover:text-harvest hover:bg-cocoa w-[92%] h-[124.5] 2xl:h-[15vh] text-cocoa rounded-r9 pl-20 py-2 pr-2 flex items-center justify-between bg-cocoa-10">
          <div className="text-[26px] leading-[42px]">Protéger les petits agriculteurs</div>
          <div className="opacity-0 group-hover:opacity-100 duration-300 h-full w-[191px]"><img src="./c4.png" className="w-full object-cover h-full rounded-r7" alt="" /></div>
        </div>
        <div className="group duration-300 hover:w-full hover:text-harvest hover:bg-cocoa w-[92%] h-[124.5] 2xl:h-[15vh] text-cocoa rounded-r9 pl-20 py-2 pr-2 flex items-center justify-between bg-cocoa-10">
          <div className="text-[26px] leading-[42px]">Réduire la fraude et le commerce illicite</div>
          <div className="opacity-0 group-hover:opacity-100 duration-300 h-full w-[191px]"><img src="./trace4.png" className="w-full object-cover h-full rounded-r7" alt="" /></div>
        </div>
        <div className="group duration-300 hover:w-full hover:text-harvest hover:bg-cocoa w-[92%] h-[124.5] 2xl:h-[15vh] text-cocoa rounded-r9 pl-20 py-2 pr-2 flex items-center justify-between bg-cocoa-10">
          <div className="text-[26px] leading-[42px]">Favoriser une agriculture durable</div>
          <div className="opacity-0 group-hover:opacity-100 duration-300 h-full w-[191px]"><img src="./demand1.png" className="w-full object-cover h-full rounded-r7" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Impact
