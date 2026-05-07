import { useTranslation } from "react-i18next"
import { Link } from "react-router"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-8 py-12 pb-32 md:p-16 grid grid-cols-2 md:grid-cols-5 min-h-auto md:min-h-135 bg-cocoa relative overflow-hidden gap-12 md:gap-16">
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
        <span className="font-extrabold uppercase leading-[13.5vw] text-[24vw] tracking-[-4%] text-harvest-5 select-none">
          TRACAO
        </span>
      </div>

      {/* Logo & Info */}
      <div className="z-10 flex items-start flex-col gap-4 col-span-2 md:col-span-1">
        <img src="./logo-harvest.png" alt="Harvest logo" />
        <div className="font-light leading-4.5 tracking-[2%] text-[14px] text-harvest-30">{t('footer.tagline')}</div>
      </div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block"></div>

      {/* Product Links */}
      <div className="z-10 flex items-start flex-col gap-4 pt-2">
        <div className="text-[14px] leading-4 tracking-[2%] font-medium text-harvest">{t('footer.product')}</div>
        <div className="flex flex-col gap-4">
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">{t('footer.features')}</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">{t('footer.how_it_works')}</Link>
        </div>
      </div>

      {/* Company Links */}
      <div className="z-10 flex items-start flex-col gap-4 pt-2">
        <div className="text-[14px] leading-4 tracking-[2%] font-medium text-harvest">{t('footer.company')}</div>
        <div className="flex flex-col gap-4">
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">{t('footer.about')}</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">{t('footer.contact')}</Link>
          <Link to='#' className="text-[14px] leading-4 tracking-[2%] font-light text-harvest-30">{t('footer.partners')}</Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="z-10 flex items-start flex-col gap-5 pt-2 col-span-2 md:col-span-1">
        <div className="text-[14px] leading-5 tracking-[2%] font-medium text-harvest">{t('footer.cta_text')}</div>
        <div className="flex gap-4 h-11 max-w-full md:max-w-44.75 rounded-r6 pl-5.5 pr-1.5 py-1 items-center justify-between bg-harvest w-full text-cocoa text-[14px] font-medium">
          <div className="">{t('footer.cta_button')}</div>
          <div className="w-8 h-8 rounded-full bg-cocoa"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
