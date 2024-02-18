import { Outlet, useLocation } from "react-router-dom";
// components
import { ProjectsHome } from "./projects/projects-home";

export const Projects = () => {
  const location = useLocation();

  return (
    <div className='flex h-full flex-col'>{location.pathname === "/projects" ? <ProjectsHome /> : <Outlet />}</div>
  );
};
