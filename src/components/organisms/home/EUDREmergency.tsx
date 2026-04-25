const EUDREmergency = () => {
  return (
    <div className="flex flex-col items-start gap-16 min-h-screen p-16">
      <div className="w-full flex items-staart justify-between">
        <div className="max-w-[364px] text-[32px] leading-[42px] 2xl:max-w-[420px] 2xl:text-[36px] 2xl:leading-[46px] font-medium  text-cocoa">
          New regulations <span className="text-cocoa-40">are changing</span> everything</div>
        <div className="max-w-[399px] 2xl:max-w-[420px] text-[18px] 2xl:text-[22px] font-normal leading-[28px] 2xl:leading-[32px] text-end">
          The European Union now requires full traceability of cocoa imports. Without compliance, producers risk losing access to one of their largest markets.
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full h-[80vh] grid grid-cols-3">
        <div className="bg-cocoa rounded-r9 2xl:rounded-r12 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid grid-rows-[0.8fr_3fr]">
          <div className="flex flex-col gap-2 relative px-5 pt-4">
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">GPS-based farm tracking required</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Farms must now be precisely mapped using GPS coordinates to prove the exact origin of cocoa production. This ensures that cocoa is not sourced from restricted or deforested areas.</div>
          </div>
          <div className="w-full h-full rounded-r7 2xl:rounded-r9 overflow-hidden">
            <img src="./eu1.png" className="w-full h-full object-cover" alt="hero image" />
          </div>
        </div>
        <div className="bg-cocoa rounded-r9 2xl:rounded-r12 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid grid-rows-[3fr_0.8fr]">
          <div className="w-full h-full rounded-r7 2xl:rounded-r9 overflow-hidden">
            <img src="./eu2.png" className="w-full h-full object-cover" alt="hero image" />
          </div>
          <div className="flex flex-col gap-2 relative px-5 pt-4">
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">Strict verification of origin</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Every batch of cocoa must be linked to verified data, including farm location, producer identity, and production records, making origin claims fully auditable.</div>
          </div>
        </div>
        <div className="bg-cocoa rounded-r9 2xl:rounded-r12 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid grid-rows-[0.8fr_3fr]">
          <div className="flex flex-col gap-2 relative px-5 pt-4">
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">Risk of exclusion from EU markets</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Without proper traceability and compliance, cocoa exports can be rejected, putting access to the European market, one of the largest buyers, at serious risk.</div>
          </div>
          <div className="w-full h-full rounded-r7 2xl:rounded-r9 overflow-hidden">
            <img src="./eu3.png" className="w-full h-full object-cover" alt="hero image" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default EUDREmergency
