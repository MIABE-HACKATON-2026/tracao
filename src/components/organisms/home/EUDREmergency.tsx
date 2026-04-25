const EUDREmergency = () => {
  return (
    <div id="eudr" className="flex flex-col items-start gap-16 min-h-screen p-16">
      <div className="w-full flex items-staart justify-between">
        <div className="max-w-[364px] text-[32px] leading-[42px] 2xl:max-w-[420px] 2xl:text-[36px] 2xl:leading-[46px] font-medium  text-cocoa">
          De nouvelles réglementations <span className="text-cocoa-40">changent</span> tout</div>
        <div className="max-w-[399px] 2xl:max-w-[420px] text-[18px] 2xl:text-[22px] font-normal leading-[28px] 2xl:leading-[32px] text-end">
          L'Union européenne exige désormais une traçabilité complète des importations de cacao. Sans conformité, les producteurs risquent de perdre l'accès à l'un de leurs plus grands marchés.
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full h-[80vh] grid grid-cols-3">
        <div className="bg-cocoa rounded-r9 2xl:rounded-r12 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid grid-rows-[0.8fr_3fr]">
          <div className="flex flex-col gap-2 relative px-5 pt-4">
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">Suivi GPS des exploitations requis</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Les exploitations doivent désormais être cartographiées avec précision à l'aide de coordonnées GPS pour prouver l'origine exacte de la production de cacao. Cela garantit que le cacao ne provient pas de zones restreintes ou déboisées.</div>
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
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">Vérification stricte de l'origine</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Chaque lot de cacao doit être lié à des données vérifiées, notamment la localisation de l'exploitation, l'identité du producteur et les registres de production, rendant les déclarations d'origine entièrement auditables.</div>
          </div>
        </div>
        <div className="bg-cocoa rounded-r9 2xl:rounded-r12 right-0 bottom-[-80px] max-2xl:p-2 2xl:p-3 grid grid-rows-[0.8fr_3fr]">
          <div className="flex flex-col gap-2 relative px-5 pt-4">
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white tracking-[0%] flex">Risque d'exclusion des marchés européens</div>
            <div className="text-[14px] 2xl:text-[18px] leading-[20px] 2xl:leading-[28px] font-normal text-white-70 ">Sans traçabilité ni conformité adéquates, les exportations de cacao peuvent être rejetées, compromettant gravement l'accès au marché européen, l'un des plus grands acheteurs.</div>
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
