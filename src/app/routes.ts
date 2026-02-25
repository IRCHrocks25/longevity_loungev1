import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Founder } from "./pages/Founder";
import { Membership } from "./pages/Membership";
import { PreventionGuide } from "./pages/PreventionGuide";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "founder", Component: Founder },
      { path: "membership", Component: Membership },
      { path: "prevention-guide", Component: PreventionGuide },
    ],
  },
]);