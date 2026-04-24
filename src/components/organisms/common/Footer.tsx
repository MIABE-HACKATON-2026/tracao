import { Link } from "react-router"

const Footer = () => {
  return (
    <div className="w-full p-16 gap-16 grid grid-cols-5 min-h-135 bg-cocoa relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
        <span className="font-extrabold uppercase leading-[13.5vw] text-[24vw] tracking-[-4%] text-harvest-5 select-none">
          TRACAO
        </span>
      </div>
      <div className="z-100 flex items-start flex-col gap-4">
        <img src="./logo-harvest.png" alt="Harvest logo" />
        <div className="font-light leading-4.5 tracking-[2%] text-[14px] text-harvest-30">Building the future of traceable cocoa in Africa.</div>
      </div>
      <div className=""></div>
      <div className="flex items-start flex-col gap-4 pt-2">
        <div className="text-[14px] leading-4 tracking-[2%] font-medium text-harvest">Product</div>
        <div className="flex flex-col gap-4">
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">Features</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">How It Works</Link>
        </div>
      </div>
      <div className="flex items-start flex-col gap-4 pt-2">
        <div className="text-[14px] leading-4 tracking-[2%] font-medium text-harvest">Company</div>
        <div className="flex flex-col gap-4">
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">About</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">Contact</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">Partners</Link>
        </div>
      </div>
      <div className="flex items-start flex-col gap-5 pt-2">
        <div className="text-[14px] leading-5 tracking-[2%] font-medium text-harvest">Start tracking your cocoa today.</div>
        <div className="flex gap-4 h-11 max-w-44.75 rounded-r6 pl-5.5 pr-1.5 py-1 items-center justify-between bg-harvest w-full text-cocoa text-[14px] font-medium">
          <div className="">Get Started</div>
          <div className="w-8 h-8 rounded-full bg-cocoa"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
