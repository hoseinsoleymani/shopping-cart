interface TabContent {
  id: number;
  content: { id: number; text: string }[];
  text: string;
}

export const tabContents: TabContent[] = [
  {
    id: 1,
    content: [
      {
        id: 1,
        text: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
      },
      {
        id: 2,
        text: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
      },
      {
        id: 3,
        text: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
      },
    ],
    text: "Product Information",
  },
  {
    id: 2,
    content: [
      {
        id: 4,
        text: "Stylish fast moving, very resistant to water and human movements.",
      },
      {
        id: 5,
        text: "Stylish fast moving, very resistant to water and human movements.",
      },
      {
        id: 6,
        text: "Stylish fast moving, very resistant to water and human movements.",
      },
    ],
    text: "Reviews 0",
  },
  {
    id: 3,
    content: [
      {
        id: 7,
        text: "Suitable for all ages and very light and at a reasonable price, I will definitely recommend it to you to buy it at a discount and enjoy it.",
      },
      {
        id: 8,
        text: "Suitable for all ages and very light and at a reasonable price, I will definitely recommend it to you to buy it at a discount and enjoy it.",
      },
      {
        id: 9,
        text: "Suitable for all ages and very light and at a reasonable price, I will definitely recommend it to you to buy it at a discount and enjoy it.",
      },
    ],
    text: "Your Experiences",
  },
];
