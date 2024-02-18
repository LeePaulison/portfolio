import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
// components
import { Welcome } from "./pages/welcome";

const headerStyle = {
  borderBottom: "1px solid #ccc",
};

export const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };

  return (
    <div className='container h-full mx-auto flex flex-col'>
      <header className='w-full p-8 pb-4' style={headerStyle}>
        <div className='flex flex-row justify-end gap-4'>
          <NavLink className='font-lg font-bold' to='/'>
            Home
          </NavLink>
          <select className='navSelect' onChange={handleSelect}>
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
