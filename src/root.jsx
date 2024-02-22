import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome";

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = (e) => {
    navigate(e.target.value);
  };

  const handleSelectClick = (e) => {
    if (location.pathname !== e.target.value) {
      navigate(e.target.value);
    }
  };

  return (
    <div className='container h-full mx-auto flex flex-col'>
      <header className='w-full p-8 pb-4 border-b border-stone-300'>
        <div className='flex flex-row justify-end gap-4'>
          <NavLink className='font-lg font-bold' to='/'>
            Home
          </NavLink>
          <NavLink className='font-lg font-bold' to='/projects/todo'>
            To Do List
          </NavLink>
          <NavLink className='font-lg font-bold' to='/projects/videoplayer'>
            Video Player
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
