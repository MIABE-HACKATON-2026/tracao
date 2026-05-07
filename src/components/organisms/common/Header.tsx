import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navLinks from "../../../constants/navLinks";
import { ArrowDownIcon, UserIcon, MenuIcon, CloseIcon, GlobeIcon } from "../../icons";
import { cn } from "../../../lib/utils";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const nextLang = i18n.language?.startsWith('fr') ? 'en' : 'fr';
        i18n.changeLanguage(nextLang);
    };

    const currentLang = i18n.language?.startsWith('fr') ? 'FR' : 'EN';

    return (
        <>
            <div className={cn(
                "w-[92%] md:w-full pl-6 pr-2 py-2 rounded-[24px] md:rounded-full h-15 z-1100 fixed flex items-center justify-between text-[14px] font-normal leading-3.5 text-cocoa bg-white max-w-270 border-[0.4px] border-cocoa-10 top-6 -translate-x-1/2 left-1/2 transition-all duration-300",
                isMenuOpen && "rounded-b-none"
            )}>
            <Link to="/">
                <img src="./logo.svg" alt="Tracao logo" />
            </Link>

            <div className="hidden md:flex items-center gap-5">
                {navLinks.map((link, index) => {
                    const isOpen = openIndex === index;

                    if (link.has_dropdown) {
                        return (
                            <div
                                key={index}
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className="relative flex items-center gap-1 cursor-pointer"
                            >
                                <span>{t(link.label)}</span>

                                <span
                                    className={cn(
                                        "transition-transform duration-300",
                                        isOpen ? "-rotate-180" : "rotate-0"
                                    )}
                                >
                                    <ArrowDownIcon />
                                </span>

                                {/* Dropdown */}
                                {isOpen && (
                                    <div className="absolute top-full mt-2 bg-white shadow-md rounded-md p-2">
                                        {link.dropdown.map((item, i) => (
                                            <Link
                                                key={i}
                                                to={item.link}
                                                className="block px-3 py-1 hover:bg-gray-100"
                                            >
                                                {t(item.label)}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <Link key={index} to={link.link}>
                            {t(link.label)}
                        </Link>
                    );
                })}
            </div>

            <div className="hidden md:flex gap-4 justify-end items-center h-full">
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 h-11 rounded-full border border-cocoa-10 hover:bg-cocoa-5 transition-colors text-cocoa"
                >
                    <GlobeIcon className="size-4" />
                    <span className="font-medium">{currentLang}</span>
                </button>
                <Link to='/login' className="flex items-center gap-1">
                    {t('header.login')}
                </Link>
                <Link to='/login' className="flex items-center gap-1 text-white px-3 h-full rounded-[25px] bg-cocoa">
                    {t('header.create_account')}
                    <UserIcon className="fill-white" />
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-cocoa focus:outline-none"
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
            "md:hidden fixed top-[110px] left-1/2 -translate-x-1/2 w-[92%] bg-white border-[0.4px] border-cocoa-10 rounded-b-[24px] z-1099 overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[80vh] opacity-100 py-6 border-t-0" : "max-h-0 opacity-0 py-0"
        )}>
            <div className="flex flex-col px-6 gap-6">
                {navLinks.map((link, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        {link.has_dropdown ? (
                            <>
                                <div 
                                    className="flex items-center justify-between text-[16px] font-medium text-cocoa"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span>{t(link.label)}</span>
                                    <ArrowDownIcon className={cn("transition-transform duration-300", openIndex === index && "-rotate-180")} />
                                </div>
                                <div className={cn(
                                    "flex flex-col gap-3 pl-4 overflow-hidden transition-all",
                                    openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                                )}>
                                    {link.dropdown.map((item, i) => (
                                        <Link key={i} to={item.link} className="text-[14px] text-cocoa-60" onClick={() => setIsMenuOpen(false)}>
                                            {t(item.label)}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <Link to={link.link} className="text-[16px] font-medium text-cocoa" onClick={() => setIsMenuOpen(false)}>
                                {t(link.label)}
                            </Link>
                        )}
                    </div>
                ))}
                <div className="h-[0.4px] bg-cocoa-10 my-2" />
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center justify-center gap-2 text-cocoa p-4 rounded-full border border-cocoa-10 text-[16px] font-medium"
                >
                    <GlobeIcon className="size-5" />
                    <span>{t('header.lang_label')} : {currentLang === 'FR' ? 'Français' : 'English'}</span>
                </button>
                <Link to='/login' className="flex items-center justify-center gap-2 text-cocoa p-2 rounded-full text-[16px] font-medium" onClick={() => setIsMenuOpen(false)}>
                    {t('header.login')}
                </Link>
                <Link to='/login' className="flex items-center justify-center gap-2 text-white p-4 rounded-full bg-cocoa text-[16px] font-medium" onClick={() => setIsMenuOpen(false)}>
                    {t('header.create_account')}
                    <UserIcon className="fill-white size-5" />
                </Link>
            </div>
        </div>
    </>
);
};

export default Header;