import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./pages/admin/AdminHome";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    }, {
      path: "products",
      element: <Products />
    }, {
      path: "products/:productId", // coloque nomes que façam sentido para o parâmetro.
      element: <Product />,
      loader: loadProduct, // Função que carrega os dados para que a rota funcione.
      errorElement: <ProductBoundary />
    }, {
      path: "cart",
      element: <Cart />,
    },
    ]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
])

export default router