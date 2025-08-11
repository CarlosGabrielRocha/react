import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";
import Stock from "./views/Stock";
import CreateItem from "./views/CreateItem";
import dashboardLoader from "./loaders/dashboardLoader";
import DefaultBoundary from "./errors/DefaultBoundary";
import databaseLoader from "./loaders/databaseLoader";
import Item from "./views/Item";
import UpdateItem from "./views/UpdateItem";
import ItemsLayout from "./layouts/ItemsLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <DefaultBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader
      },
    ]
  },
  {
    path: '/items',
    element: <ItemsLayout />,
    errorElement: <DefaultBoundary />,
    children: [
      {
        index: true,
        element: <Stock />,
        loader: databaseLoader
      },
      {
        path: ':itemId',
        element: <Item />
      },
      {
        path: 'create',
        element: <CreateItem />
      },
      {
        path: 'update/:itemId',
        element: <UpdateItem />
      }
    ]
  }
])

export default router