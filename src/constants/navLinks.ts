import type { NavLinkI } from "../types/NavLink";

const navLinks: NavLinkI[] = [
    {
        label: "Product",
        has_dropdown: true,
        dropdown: [
            {
                label: "Items 1",
                link: "#"
            },
            {
                label: "Items 2",
                link: "#"
            }
        ],
        open: false
    },
    {
        label: "Uses Cases",
        link: "#"
    },
    {
        label: "Ressouces",
        link: "#"
    },
    {
        label: "About",
        link: "#"
    }
];


export default navLinks;