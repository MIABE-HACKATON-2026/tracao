import { useTranslation } from "react-i18next"
import UsersIcon from "../../icons/UsersIcon"

const Problem = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[832px] md:min-h-[832px] py-16 md:py-0 px-6">
      <div className="w-full max-w-[1080px] min-h-[832px] mx-auto flex flex-col items-center justify-center gap-8 md:gap-16">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
          <div className="max-w-[545px] text-[32px] leading-[40px] md:text-[54px] md:leading-[60px] font-semibold text-cocoa text-center md:text-left">{t('problem.title')}</div>
          <div className="flex flex-col gap-6 items-center md:items-end max-w-full md:max-w-[446px]">
            <div className="text-center md:text-end text-[16px] leading-[28px] font-normal">{t('problem.subtitle')}</div>
            <div className="cursor-pointer py-1 pl-[22px] pr-[6px] bg-cocoa h-11 rounded-[24px] flex items-center justify-center gap-4 w-fit">
              <div className="text-white text-[16px]">{t('problem.button')}</div>
              <div className="h-8 w-8 bg-white flex items-center justify-center rounded-[28px]"><UsersIcon /></div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-cocoa-5 rounded-[24px] h-[200px] md:h-[322px]"></div>
          <div className="bg-cocoa-5 rounded-[24px] h-[200px] md:h-[322px]"></div>
          <div className="bg-cocoa-5 rounded-[24px] h-[200px] md:h-[322px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Problem
