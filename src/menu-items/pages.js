// assets
import { IconLogout } from '@tabler/icons';

// constant
const icons = {
  IconLogout,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  type: "group",
  children: [
    {
      id: "Logout",
      title: "Logout",
      type: "item",
      url: "/pages/login",
      icon: icons.IconLogout,
      target: true,
    },
  ],
};

export default pages;
