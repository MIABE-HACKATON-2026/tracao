import { useTranslation } from "react-i18next"
import actors from "../../../constants/actors"

const Actors = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[832px] md:min-h-[832px] py-16 md:py-0 px-6">
      <div className="w-full max-w-[1080px] min-h-[832px] mx-auto flex flex-col items-center justify-center gap-10 md:gap-16">
        <div className="max-w-[612px] text-center w-full text-[32px] leading-[40px] md:text-[54px] md:leading-[60px] font-semibold text-cocoa">{t('actors.title')}</div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-6 md:gap-9">
          {
            actors.map((a, i) => {
              return (
                <div key={i} className="w-full md:w-[415px] h-auto md:h-[150px] flex items-center justify-start gap-5 md:gap-7 bg-cocoa-5 rounded-full px-5 md:px-7 py-4">
                  <div className="h-16 w-16 md:h-25 md:w-25 bg-cocoa-5 rounded-full flex items-center justify-center shrink-0">
                    <img src={a.logo} alt={t(a.label)} className="w-8 md:w-auto" />
                  </div>
                  <div className="text-[20px] md:text-[32px] leading-[28px] md:leading-[40px] font-normal text-cocoa-80">{ t(a.label) }</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Actors
