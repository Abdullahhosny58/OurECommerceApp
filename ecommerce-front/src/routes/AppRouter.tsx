import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Prodect = lazy(() => import("@pages/Prodect"));
const About = lazy(() => import("@pages/About"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Error = lazy(() => import("@pages/Error/Error"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="loading plase wait....">
        <MainLayout />{" "}
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading plase wait....">
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback="loading plase wait....">
            {" "}
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/Wishlist",
        element: (
          <Suspense fallback="loading plase wait....">
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense fallback="loading plase wait....">
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/categories/products/:prefix",
        element: (
          <Suspense fallback="loading plase wait....">
            <Prodect />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="loading plase wait....">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense>
            <Login />{" "}
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback="loading plase wait....">
            <Register />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
