// component
import { Project } from "./project";
// data
import projects from "../../../assets/data/projects.json";

const projectList = projects.map((project) => {
  return <Project key={project.id} project={project} />;
});

export function Projects() {
  return (
    <div className='flex flex-col place-items-center py-16 bg-stone-200'>
      <div className='w-full md:w-[75%] p-4 bg-stone-700 text-slate-50 rounded-[6px] timeline'>
        <ul className='list-disc list-inside border-s-2 border-amber-700 py-[10px] px-[5px]'>{projectList}</ul>
      </div>
    </div>
  );
}
