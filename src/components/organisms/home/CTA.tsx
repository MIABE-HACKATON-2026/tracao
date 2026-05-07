import { useTranslation } from "react-i18next"
import QrCodeIcon from "../../icons/QrCodeIcon"

const CTA = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-[832px] md:min-h-[832px] py-16 md:py-0 px-6">
            <div className="w-full max-w-[1080px] min-h-[832px] mx-auto flex flex-col items-center justify-center">
                <div className="w-full min-h-[400px] md:h-[600px] bg-roast rounded-[24px] relative overflow-hidden py-12 md:py-0">
                    <img src="./cta.png" alt="" className="absolute z-10 inset-0 w-full h-full object-cover opacity-50 md:opacity-100" />
                    <div className="relative z-100 w-full h-full flex items-center justify-center flex-col gap-8 px-6">
                        <div className="flex items-center justify-center flex-col gap-4 max-w-[377px] text-cocoa">
                            <div className="w-full text-center text-[36px] leading-[40px] md:text-[60px] md:leading-[64px] font-semibold">{t('cta.title')}</div>
                            <div className="max-w-[282px] text-center text-[16px] leading-[24px]">{t('cta.subtitle')}</div>
                        </div>
                        <div className="cursor-pointer py-1 pl-[22px] pr-[6px] bg-cocoa h-11 rounded-[24px] flex items-center justify-center gap-4 w-fit">
                            <div className="text-white text-[16px]">{t('cta.button')}</div>
                            <div className="h-8 w-8 bg-white flex items-center justify-center rounded-[28px]"><QrCodeIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
