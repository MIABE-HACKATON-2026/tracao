import { useTranslation } from "react-i18next"
import CertifiedIcon from "../../icons/CertifiedIcon"
import QrCodeIcon from "../../icons/QrCodeIcon"

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[832px] md:h-[832px] relative overflow-hidden">
      <div className="w-full h-full z-1000 relative flex flex-col items-center justify-start pt-32 md:pt-50 gap-8 px-6">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-[596px]">
          <div className="text-[40px] leading-[48px] md:text-[72px] md:leading-[80px] text-center font-bold text-cocoa">{t('hero.title')}</div>
          <div className="w-full max-w-[396px] text-[16px] leading-[28px] font-normal text-center">{t('hero.subtitle')}</div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="h-11 w-11 bg-cocoa rounded-full p-1 cursor-pointer">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
              <QrCodeIcon />
            </div>
          </div>
          <div className="cursor-pointer py-1 pl-[22px] pr-[6px] bg-cocoa h-11 rounded-[24px] flex items-center justify-center gap-4">
            <div className="text-white text-[16px]">{t('hero.get_started')}</div>
            <div className="h-8 w-8 bg-white flex items-center justify-center rounded-[28px]"><CertifiedIcon /></div>
          </div>
        </div>
      </div>
      <img src="./hero-pattern.svg" className="absolute inset-0 w-full h-full object-cover z-0" alt="" />
      
      {/* Marquee Container */}
      <div className="absolute -rotate-1 bottom-12 md:bottom-6 z-0 w-full overflow-hidden">
        <div className="animate-marquee">
          <img src="./band.png" className="shrink-0 h-[60px] md:h-[86px] object-cover" alt="" />
          <img src="./band.png" className="shrink-0 h-[60px] md:h-[86px] object-cover" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
