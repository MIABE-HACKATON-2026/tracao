import { useTranslation } from "react-i18next"
import UserIcon from "../../icons/UserIcon"

const Solution = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[832px] md:min-h-[832px] py-16 md:py-0 px-6">
      <div className="w-full max-w-[1080px] mx-auto min-h-[832px] flex flex-col items-center justify-center gap-12 md:gap-16">
        <div className="w-full flex flex-col items-center justify-between gap-6">
          <div className="max-w-[696px] text-center w-full text-[32px] leading-[40px] md:text-[54px] md:leading-[60px] font-semibold text-cocoa">{t('solution.title')}</div>
          <div className="flex flex-col gap-6 items-center max-w-[620px]">
            <div className="text-center text-[16px] leading-[28px] font-normal ">{t('solution.subtitle')}</div>
            <div className="cursor-pointer py-1 pl-[22px] pr-[6px] bg-cocoa h-11 rounded-[24px] flex items-center justify-center gap-4 w-fit">
              <div className="text-white text-[16px]">{t('solution.button')}</div>
              <div className="h-8 w-8 bg-white flex items-center justify-center rounded-[28px]"><UserIcon /></div>
            </div>
          </div>
        </div>
        <div className="h-[280px] w-[280px] md:h-[420px] md:w-[420px] bg-cocoa-5 rounded-full flex items-center justify-center">
          <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-cocoa-5 rounded-full flex items-center justify-center">
            <img src="./logo-only.png" alt="Tracao logo only" className="w-24 md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
