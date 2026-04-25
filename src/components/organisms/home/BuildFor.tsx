const BuildFor = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative p-16 gap-10">
      <img src="./logo-tiny.png" alt="" />
      <div className="max-w-[740px] text-[48px] font-medium leading-[54px] text-cocoa text-center">
        Built for every actor in the cocoa ecosystem
      </div>
      <div className="h-[170px] w-[194px] border border-2 rounded-r7 p-2 gap-4 absolute bottom-[15%] left-[25%] rotate-[10.89deg]">
        <img src="./c1.png" alt="" />
        <div className="text-[24px] w-full text-center text-normal leading-[28px] ">Cooperatives</div>
      </div>
      <div className="h-[170px] w-[194px] border border-2 rounded-r7 p-2 gap-4 absolute bottom-[20%] right-[30%] rotate-[-5.65deg]">
        <img src="./c2.png" alt="" />
        <div className="text-[24px] w-full text-center text-normal leading-[28px]">Exporters</div>
      </div>
      <div className="h-[170px] w-[194px] border border-2 rounded-r7 p-2 gap-4 absolute top-[30%] left-[20%] rotate-[-21.9deg]">
        <img src="./c3.png" alt="" />
        <div className="text-[24px] w-full text-center text-normal leading-[28px]">Producers</div>
      </div>
      <div className="h-[170px] w-[194px] border border-2 rounded-r7 p-2 gap-4 absolute top-[15%] right-[25%] rotate-[20.12deg]">
        <img src="./c4.png" alt="" />
        <div className="text-[24px] w-full text-center text-normal leading-[28px]">Regulators</div>
      </div>
    </div>
  )
}

export default BuildFor
