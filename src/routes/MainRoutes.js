/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Users = Loadable(lazy(() => import('views/pages/user/User.js')));
const Products = Loadable(lazy(() => import('views/pages/product/Product.js')));
const HistoryBid = Loadable(lazy(() => import('views/pages/historyBid/HistoryBid.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
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
            path: 'history',
            element: <HistoryBid />
        }
    ]
};

export default MainRoutes;
