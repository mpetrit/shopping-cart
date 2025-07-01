import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import ShopList from "./components/ShopList";
import ShopCart from "./components/ShopCart";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <ShopList /> },
      { path: "cart", element: <ShopCart /> },
    ],
    errorElement: <h1>Wrong page</h1>,
  },
];
export default routes;
