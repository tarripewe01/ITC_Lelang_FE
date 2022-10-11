// assets
import {
  IconDashboard,
  IconUsers,
  IconBasket,
  IconHistory,
} from "@tabler/icons";

// constant
const icons = { IconDashboard, IconUsers, IconBasket, IconHistory };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/ITC-Finance/dashboard",
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },

    {
      id: "products",
      title: "Products",
      type: "item",
      url: "/ITC-Finance/products",
      icon: icons.IconBasket,
      breadcrumbs: true,
    },
    {
      id: "history",
      title: "History Bid",
      type: "item",
      url: "/ITC-Finance/history",
      icon: icons.IconHistory,
      breadcrumbs: true,
    },
    {
      id: "users",
      title: "Users",
      type: "item",
      url: "/ITC-Finance/users",
      icon: icons.IconUsers,
      breadcrumbs: true,
    },
  ],
};

export default dashboard;
