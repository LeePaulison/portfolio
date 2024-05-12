import PropTypes from "prop-types";

export function Project({ project }) {
  function displayLinks(arr) {
    if (arr.length === 0) return null;

    return arr.map((link) => (
      <>
        <a key={link.url} href={link.url} target='_blank' rel='noreferrer' className='project-links'>
          {link.type}
        </a>
      </>
    ));
  }

  return (
    <li key={project.id} className='flex flex-row place-items-center p-[20px] project'>
      <div className='grow me-8'>
        <span className='project-date text-stone-800 font-bold bg-amber-500 px-[7px] py-[5px] rounded-[25px]'>
          {project.date}
        </span>
        <span> - {project.status}</span>
        <h3 className='text-2xl text-amber-500 project-title pt-[7px]'>{project.title}</h3>
        <p className='pt-[5px] project-desc'>{project.description}</p>
        <div className='pt-[5px]'>
          <span className='text-amber-500 text-lg'>Technologies: </span>
          {project.technologies.map((technology, idx) => (
            <span key={technology} className='text-sm'>
              {` ${technology} ${idx < project.technologies.length - 1 ? "| " : ""}`}
            </span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className='flex flex-row items-center'>
            <span className='text-amber-500 text-lg py-2'>Links: </span>
            <>{displayLinks(project.links)}</>
          </div>
        )}
      </div>
      {project.media.url === "" ? (
        <div className='flex place-items-center w-[150px] h-[150px] shrink-0'>{project.media.alt}</div>
      ) : (
        <img src={project.media.url} alt={project.media.alt} width={`150px`} height={"150px"} />
      )}
    </li>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
