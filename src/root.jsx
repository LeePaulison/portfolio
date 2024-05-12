import { Outlet, useLocation } from "react-router-dom";
// components
import { Header } from "./components/header";
import { Welcome } from "./pages/welcome/welcome";
import { Footer } from "./components/footer";

export const Root = () => {
  const location = useLocation();

  return (
    <div className='container min-h-screen mx-auto flex flex-col bg-stone-100 overflow-hidden'>
      <Header />
      {location.pathname === "/" ? <Welcome /> : <Outlet />}
      <Footer />
    </div>
  );
};
