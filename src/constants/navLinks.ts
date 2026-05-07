import type { NavLinkI } from "../types/NavLink";

const navLinks: NavLinkI[] = [
    {
        label: "nav.product",
        has_dropdown: true,
        dropdown: [
            { label: "nav.solution",          link: "/#solution" },
            { label: "nav.how_it_works",    link: "/#how-it-works" },
            { label: "nav.platform",        link: "/#product" },
            { label: "nav.eudr",  link: "/#eudr" },
            { label: "nav.who_is_concerned",     link: "/#build-for" },
            { label: "nav.impact",               link: "/#impact" },
        ],
        open: false
    },
    {
        label: "nav.use_cases",
        link: "#"
    },
    {
        label: "nav.scan_qr",
        link: "#"
    },
    {
        label: "nav.resources",
        link: "#"
    },
    {
        label: "nav.about",
        link: "#"
    }
];

export default navLinks;