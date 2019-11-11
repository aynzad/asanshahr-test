import asyncComponent from "../components/router/AsyncComponent";

const MainPage = asyncComponent(() => import("../pages/Main/Main"));
const LoginPage = asyncComponent(() => import("../pages/Login/Login"));
const AppPage = asyncComponent(() => import("../pages/App/App"));

export default [
  {
    href: "/app",
    title: "آگهی‌ها",
    auth: true,
    component: AppPage
  },
  {
    href: "/login",
    title: "ورود",
    auth: false,
    button: true,
    component: LoginPage
  },
  {
    href: "/",
    title: "صفحه اصلی",
    auth: null,
    component: MainPage
  }
];
