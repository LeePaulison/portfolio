import { NavLink } from "react-router-dom";

export function Header() {
  return (
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
  );
}
