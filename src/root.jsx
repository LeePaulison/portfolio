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
          {/* <CustomSelect options={options} onChange={handleSelect} /> */}
          <select className='navSelect' onChange={handleSelect} onClick={(e) => handleSelectClick(e)}>
            <option
              value='/projects'
              className={`navSelectOption ${location.pathname === "/projects" ? "active" : ""}`}
            >
              Projects
            </option>
            <option
              value='/projects/todo'
              className={`navSelectOption ${location.pathname === "/projects/todo" ? "active" : ""}`}
            >
              To Do List
            </option>
            <option
              value='/projects/videoplayer'
              className={`navSelectOption ${location.pathname === "/projects/videoplayer" ? "active" : ""}`}
            >
              Video Player
            </option>
            <option
              value='/projects/audioplayer'
              className={`navSelectOption ${location.pathname === "/projects/audioplayer" ? "active" : ""}`}
            >
              Audio Player
            </option>
          </select>
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
