import projects from "../../../assets/data/projects.json";

const projectList = projects.map((project) => {
  return (
    <li key={project.id} className='flex flex-row place-items-center p-[20px] project'>
      <div className='grow me-8'>
        <span className='project-date text-stone-800 font-bold bg-amber-500 px-[7px] py-[5px] rounded-[25px]'>
          {project.date}
        </span>
        <span> - {project.status}</span>
        <h3 className='text-2xl project-title pt-[7px]'>{project.title}</h3>
        <p className='pt-[5px] project-desc'>{project.description}</p>
        <div className='pt-[5px]'>
          Technologies:
          {project.technologies.map((technology, idx) => (
            <span key={technology} className='text-sm'>
              {` ${technology} ${idx < project.technologies.length - 1 ? "| " : ""}`}
            </span>
          ))}
        </div>
      </div>
      <img src={project.media.url} width={`200px`} />
    </li>
  );
});

export function Projects() {
  return (
    <div className='flex flex-col place-items-center py-16 bg-stone-200'>
      <div className='w-full md:w-[75%] p-4 bg-stone-700 text-slate-50 timeline'>
        <ul className='list-disc list-inside border-s-2 border-amber-700 py-[10px] px-[5px]'>{projectList}</ul>
      </div>
    </div>
  );
}
