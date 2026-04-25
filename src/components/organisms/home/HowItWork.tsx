const HowItWork = () => {
  return (
    <div id="how-it-works" className="flex flex-col items-start gap-16 h-screen p-16">
      <div className="max-w-[364px] text-[32px] leading-[42px] 2xl:max-w-[420px] 2xl:text-[36px] 2xl:leading-[46px] font-medium  text-cocoa">De la ferme à l'export, entièrement traçable</div>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full h-[56px] 2xl:h-[15vh] grid grid-cols-5">
          <div className="w-full h-[56px] 2xl:h-[15vh] border border-2 border-cocoa col-span-2 rounded-r9 pr-20 py-2 pl-2 flex items-center justify-start gap-4">
            <div className="h-full shrink-0"><img src="./trace1.png" className="h-full" alt="" /></div>
            <div className="text-[#000] text-[26px] leading-[42px]">Cartographier les fermes avec des données GPS</div>
          </div>
        </div>  
        <div className="w-full h-[56px] 2xl:h-[15vh] grid grid-cols-5">
          <div className=""></div>
          <div className="w-full h-[56px] 2xl:h-[15vh] border border-2 border-cocoa col-span-2 rounded-r9 pr-20 py-2 pl-2 flex items-center justify-start gap-4">
            <div className="h-full shrink-0"><img src="./trace2.png" className="h-full" alt="" /></div>
            <div className="text-[#000] text-[26px] leading-[42px]">Collecter et numériser les informations terrain</div>
          </div>
        </div>  
        <div className="w-full h-[56px] 2xl:h-[15vh] grid grid-cols-5">
          <div className=""></div>
          <div className=""></div>
          <div className="w-full h-[56px] 2xl:h-[15vh] border border-2 border-cocoa col-span-2 rounded-r9 pr-20 py-2 pl-2 flex items-center justify-start gap-4">
            <div className="h-full shrink-0"><img src="./trace3.png" className="h-full shrink-0" alt="" /></div>
            <div className="text-[#000] text-[26px] leading-[42px]">Suivre les mouvements des produits dans la chaîne</div>
          </div>
        </div>  
        <div className="w-full h-[56px] 2xl:h-[15vh] grid grid-cols-5">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="w-full h-[56px] 2xl:h-[15vh] border border-2 border-cocoa col-span-2 rounded-r9 pr-20 py-2 pl-2 flex items-center justify-start gap-4">
            <div className="h-full shrink-0"><img src="./trace4.png" className="h-full" alt="" /></div>
            <div className="text-[#000] text-[26px] leading-[42px]">Sécuriser les données pour la vérification et la conformité</div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default HowItWork
