import type { NavLinkI } from "../types/NavLink";

const navLinks: NavLinkI[] = [
    {
        label: "Produit",
        has_dropdown: true,
        dropdown: [
            { label: "La solution",          link: "/#solution" },
            { label: "Comment ça marche",    link: "/#how-it-works" },
            { label: "La plateforme",        link: "/#product" },
            { label: "Réglementation EUDR",  link: "/#eudr" },
            { label: "Qui est concerné",     link: "/#build-for" },
            { label: "Impact",               link: "/#impact" },
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