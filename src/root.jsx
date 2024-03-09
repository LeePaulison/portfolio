import { Outlet, NavLink, useLocation } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome";

export const Root = () => {
  const location = useLocation();

  return (
    <div className='container h-full mx-auto flex flex-col'>
      <header className='w-full px-8 pb-1 pt-4 border-b border-stone-800'>
        <div className='flex flex-row justify-between'>
          <h1>Lee Paulison Jr</h1>
          <div className='grow flex flex-row justify-end gap-4'>
            <NavLink className='font-lg font-bold' to='/'>
              Home
            </NavLink>
            <NavLink className='font-lg font-bold' to='/todolist'>
              To Do List
            </NavLink>
            <NavLink className='font-lg font-bold' to='/videoplayer'>
              Video Player
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
