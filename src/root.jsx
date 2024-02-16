import { Outlet, NavLink, useLocation } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome";

const headerStyle = {
  borderBottom: "1px solid #ccc",
};

export const Root = () => {
  const location = useLocation();

  return (
    <div className='container h-full mx-auto flex flex-col'>
      <header className='w-full p-8 pb-4' style={headerStyle}>
        <div className='flex flex-row justify-end gap-4'>
          <NavLink className='font-lg font-bold' to='/'>
            Home
          </NavLink>
          <NavLink className='font-bold' to='/projects'>
            Projects
          </NavLink>
          <NavLink className='font-bold' to='/about'>
            About
          </NavLink>
          <NavLink className='font-bold' to='/contact'>
            Contact
          </NavLink>
        </div>
      </header>
      {location.pathname === "/" ? <Welcome /> : <Outlet />}
    </div>
  );
};
