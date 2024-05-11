import { Outlet, NavLink, useLocation } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome/welcome";

export const Root = () => {
  const location = useLocation();

  return (
    <div className='container min-h-screen mx-auto flex flex-col bg-stone-100 overflow-hidden'>
      <header className='w-full ps-4 pe-8 pb-1 pt-4 border-b border-stone-300'>
        <div className='flex flex-row justify-between'>
          <span className='text-3xl font-extrabold'>LP</span>
          <div className='grow flex flex-row justify-end gap-4'>
            <NavLink className='font-lg font-bold' to='/'>
              Home
            </NavLink>
            <NavLink className='font-bold' to='/about'>
              About
            </NavLink>
            <NavLink className='font-bold' to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </header>
      {location.pathname === "/" ? <Welcome /> : <Outlet />}
    </div>
  );
};
