import { lazy } from "react";import Loadable from "ui-component/Loadable";
import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes'
import  MinimalLayout  from 'layout/MinimalLayout';
import Login3 from 'views/pages/authentication/authentication3/Login3';
import MainLayout from 'layout/MainLayout';
const DashboardDefault = Loadable(
    lazy(() => import("views/dashboard/Default"))
  );
  const Users = Loadable(lazy(() => import("views/pages/user/User.js")));
const HistoryBid = Loadable(
  lazy(() => import("views/pages/historyBid/HistoryBid.js"))
);
const Products = Loadable(lazy(() => import("views/pages/product/Product.js")));
const AddProducts = Loadable(
  lazy(() => import("views/pages/product/AddProduct"))
);

// export default function ThemeRoutes() {
//     return useRoutes([MainRoutes, AuthenticationRoutes]);
// }
export default function ThemeRoutes() {
    return useRoutes([
        {
            path: '/',
            element: <MinimalLayout />,
            children:[
                {
                    path: '/',
                    element: <Login3 />
                }
            ]
        },
        {
            path: '/dashboard',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <DashboardDefault />
                },
                {
                    path: 'users',
                    element: <Users />
                },
                {
                    path: 'products',
                    element: <Products />
                },
                {
                    path: 'add_product',
                    element: <AddProducts />
                },
                {
                    path: 'history',
                    element: <HistoryBid />
                }
            ]
        }
    ]);
}
