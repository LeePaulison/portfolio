import { Outlet, NavLink, useLocation } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome";

export const Root = () => {
  const location = useLocation();

  return (
    <div className='container min-h-screen mx-auto flex flex-col bg-stone-100'>
      <header className='w-full px-8 pb-1 pt-4 border-b border-stone-300'>
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
      <div className='flex items-center justify-center'>
        <div className='bg-stone-200 p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold text-stone-900 mb-2'>User Profile</h2>
          <div className='mb-4'>
            <h3 className='text-xl text-stone-700'>Jane Doe</h3>
            <p className='text-stone-600'>Front-end Developer</p>
          </div>
          <div className='flex'>
            <button className='bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 mr-2'>Edit</button>
            <button className='bg-stone-300 text-stone-900 px-4 py-2 rounded hover:bg-stone-400'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
