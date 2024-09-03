import { Home, NotebookPen, PenTool, PhoneCall, UserRound } from "lucide-react";

export const links = [
  // {
  //   id: 0,
  //   name: "Home",
  //   link: "/",
  //   icon: <Home />,
  // },
  {
    id: 1,
    name: "About",
    link: "/about",
    icon: (
      <UserRound className="mr-1 block size-5 sm:text-muted-foreground lg:hidden" />
    ),
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
    icon: (
      <PenTool className="mr-1 block size-5 sm:text-muted-foreground lg:hidden" />
    ),
  },
  {
    id: 3,
    name: "Blogs",
    link: "/blogs",
    icon: (
      <NotebookPen className="mr-1 block size-5 sm:text-muted-foreground lg:hidden" />
    ),
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
    icon: (
      <PhoneCall className="mr-1 block size-5 sm:text-muted-foreground lg:hidden" />
    ),
  },
];

export const footerLinks = [
  {
    name: "Github",
    link: "https://github.com/itzTedx",
    icon: <Home />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itzTed._x",
    icon: <Home />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/melwin-af/",
    icon: <Home />,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/melwinaf",
    icon: <Home />,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@NammaPayakaDiaries",
    icon: <Home />,
  },
];
