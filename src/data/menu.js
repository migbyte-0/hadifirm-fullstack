const menuOne = [
  {
    name: "الرئيسية",
    link: "/",
  },
  {
    name: "الخدمات",
    link: "#",
    childs: [
      {
        name: "خدماتنا القانونية",
        link: "/services",
      },
      {
        name: "تفاصيل الخدمة",
        link: "/service-detail",
      },
    ],
  },
  {
    name: "الصفحات",
    link: "#",
    childs: [
      {
        name: "عن المكتب",
        link: "/about",
      },
      {
        name: "دراسات الحالة",
        link: "/case-study",
      },
      {
        name: "دراسات الحالة 2",
        link: "/case-study-two",
      },
      {
        name: "تفاصيل القضية",
        link: "/case-detail",
      },
      {
        name: "آراء العملاء",
        link: "/testimonials",
      },
      {
        name: "فريق المحامين",
        link: "/attorneys",
      },
      {
        name: "تفاصيل المحامي",
        link: "/attorney-detail",
      },
      {
        name: "الأسئلة الشائعة",
        link: "/faq",
      },
    ],
  },
  {
    name: "تواصل معنا",
    link: "/contact",
  },
];

export { menuOne };
