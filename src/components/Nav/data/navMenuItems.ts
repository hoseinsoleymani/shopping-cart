interface navMenuItemsType {
  id: number;
  text: string;
  link: string;
  Icon?: any;
}

export const navMenuItems: navMenuItemsType[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Products",
    link: "/Products",
  },
  {
    id: 3,
    text: "About",
    link: "/About",
  },
  {
    id: 4,
    text: "Contact",
    link: "/Contact",
  },
];

export const navMenuItemsRes: navMenuItemsType[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
    Icon: "FiHome"
  },
  {
    id: 2,
    text: "Products",
    link: "/Products",
    Icon: "MdProductionQuantityLimits"
  },
  {
    id: 3,
    text: "About",
    link: "/About",
    Icon: "SiAboutdotme"
  },
  {
    id: 4,
    text: "Contact",
    link: "/Contact",
    Icon: "MdOutlineContactMail"
  },
];
