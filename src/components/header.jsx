import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className='w-full ps-4 pe-8 pb-1 pt-4 border-b border-stone-300'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <h1 className='font-bold text-2xl'>Lee Paulison Jr</h1>
          <span className='text-stone-500'>Front-end Developer</span>
        </div>
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
  );
}
