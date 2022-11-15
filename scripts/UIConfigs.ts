import { SidebarProps } from "./UIConfigs.types";

export const consumerNavLinks: SidebarProps = {
  navLinks: [
    {
      href: "/consumer",
      title: "DASHBOARD",
      icon: "fas fa-tv",
    },
    {
      href: "#",
      title: "QR (OFFLINE EXAM)",
      icon: "fas fa-qrcode",
    },
    {
      href: "/schedule",
      title: "SCHEDULE EXAM",
      icon: "fas fa-table",
    },
    {
      href: "#",
      title: "FINAL CERTIFICATES",
      icon: "fas fa-certificate",
    },
  ],
};

export const enterpriseNavLinks: SidebarProps = {
  navLinks: [
    {
      href: "/enterprise",
      title: "DASHBOARD",
      icon: "fas fa-tv",
    },
    {
      href: "/enrolled-users",
      title: "Users",
      icon: "fas fa-qrcode",
      // subLinks: [
      //   {
      //     href: "#",
      //     title: "Assign New User",
      //   },
      //   {
      //     href: "#",
      //     title: "Upload Certificate",
      //   },
      // ],
    },
  ],
};
