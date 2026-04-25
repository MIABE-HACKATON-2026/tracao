const Context = () => {
  return (
    <div className="grid grid-cols-[200px_1fr_200px] px-16 max-2xl:h-[518px] 2xl:h-[60vh]">
      <div className="flex flex-col items-start justify-between py-16">
        <img src="./logo-light.png" alt="" />
        <img src="./illustration1.png" className="2xl:w-[150px]" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-[10] 2xl:gap-[14px]">
        <div className="text-center text-[28px] 2xl:text-[32px] font-medium leading-[38px] text-cocoa">Une industrie en plein essor face à <br />des défis critiques</div>
        <div className="max-w-[506px] 2xl:max-w-[625px] text-center text-[18px] 2xl:text-[22px] leading-[28px] text-cocoa">Le cacao est un moteur économique essentiel au Togo, avec plus de 400 000 producteurs et un potentiel d'exportation en forte croissance. Pourtant, le secteur manque de l'infrastructure numérique nécessaire pour répondre aux normes internationales de traçabilité.</div>
      </div>
      <div className="flex flex-col items-start justify-end py-16">
        <img src="./illustration2.png" className="2xl:w-[150px]" alt="" />
      </div>
    </div>
  )
}

export default Context
