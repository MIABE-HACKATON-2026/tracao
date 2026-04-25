const Product = () => {
  return (
    <div className="w-full h-screen p-16">
      <div className="w-full h-full p-5 flex flex-col items-center justify-between bg-roast-10 rounded-r10">
        <div className="max-w-[700px] text-[48px] font-medium text-cocoa text-center">
          Une plateforme conçue pour les conditions réelles
        </div>
        <div className="w-full h-[60vh] relative bg-[url('../bg.png')] bg-no-repeat bg-cover rounded-r8">
          
          <div className="flex flex-col items-center justify-center gap absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
            <div className="text-white max-w-[700px] text-[28px] leading-[40px] text-center">Tracao offre une interface simple et accessible pour enregistrer, suivre et vérifier les données du cacao, même dans des environnements à faible connectivité.</div>
                    <div className="flex gap-4 h-11 max-w-44.75 rounded-r6 pl-5.5 pr-1.5 py-1 items-center justify-between bg-harvest w-full text-cocoa text-[14px] font-medium">
          <div className="">Commencer</div>
          <div className="w-8 h-8 rounded-full bg-cocoa"></div>
        </div>
            </div>

          <img src="./logo-wp.png" className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2" alt="" />
        </div>
      </div>      
    </div>
  )
}

export default Product
