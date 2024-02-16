import { Outlet, NavLink, useLocation } from "react-router-dom";
// components
import { ProjectsHome } from "./projects/projects-home";

export const Projects = () => {
  const location = useLocation();

  return (
    <div className='flex h-full md:max-lg:flex-col'>
      <div className='flex flex-col gap-3 md:max-lg:flex-row w-2/12 h-full md:max-lg:w-full p-4 border-r md:max-lg:border-b border-stone-300'>
        <NavLink className='font-bold' to='/projects'>
          Projects Home
        </NavLink>
        <NavLink className='font-bold' to='/projects/todo'>
          To Do List
        </NavLink>
        <NavLink className='font-bold' to='/projects/videoplayer'>
          Video Player
        </NavLink>
        <NavLink className='font-bold' to='/projects/audioplayer'>
          Audio Player
        </NavLink>
      </div>
      <div className='p-4'>{location.pathname === "/projects" ? <ProjectsHome /> : <Outlet />}</div>
    </div>
  );
};
