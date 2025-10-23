import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import Delivery from "../pages/Delivery";

export const routers = [
  {
    path: "/",
    name: "Главная",
    component: <Home />,
  },
  {
    path: "/catalog",
    name: "Каталог",
    component: <Catalog />,
  },
  {
    path: "/delivery",
    name: "Доставка",
    component: <Delivery />,
  },
  {
    path: "/contacts",
    name: "Контакты",
    component: <Contacts />,
  },
];
