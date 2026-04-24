import { useState } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../../constants/navLinks";
import { ArrowDownIcon, OpenInNewmeIcon } from "../../icons";
import { cn } from "../../../lib/utils";

const Header = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full px-16 py-6 z-1100 fixed flex items-center justify-between text-[14px] font-normal leading-3.5 text-cocoa">
            <Link to="/">
                <img src="./logo.svg" alt="Tracao logo" />
            </Link>

            <div className="flex items-center gap-5">
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
                                <span>{link.label}</span>

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
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <Link key={index} to={link.link}>
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            <Link to='/login' className="flex items-center gap-1">
                <span>Login</span>

                <span>
                    <OpenInNewmeIcon className="h-3.5" />
                </span>
            </Link>
        </div>
    );
};

export default Header;