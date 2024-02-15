import { Outlet, NavLink } from "react-router-dom";

export const Root = () => {
  return (
    <div className='container h-full mx-auto'>
      <header className='w-full p-8 pb-4 bg-stone-400'>
        <div className='flex flex-row justify-end gap-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </header>
      <h1>Welcome to my Portfolio</h1>
      <Outlet />
    </div>
  );
};
