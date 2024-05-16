import React from "react";
import PropTypes from "prop-types";

export function Project({ project }) {
  const [imgSrc, setImgSrc] = React.useState(null);

  React.useEffect(() => {
    import(`../../../assets/media/${project.media.url}.png`)
      .then((image) => {
        setImgSrc(image.default);
      })
      .catch((error) => {
        console.error(`Error loading image: ${error}`);
      });
  }, [project.media.url]);

  function displayLinks(arr) {
    if (arr.length === 0) return null;

    return arr.map((link) => (
      <a key={crypto.randomUUID()} href={link.url} target='_blank' rel='noreferrer' className='project-links'>
        {link.type}
      </a>
    ));
  }

  return (
    <li key={project.id} className='flex flex-col md:flex-row place-items-center p-[20px] project'>
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
        <div className='flex justify-center items-center shrink-0 mt-4 md:mt-0 border border-amber-600 w-[256px] h-[144px]'>
          {project.media.alt}
        </div>
      ) : (
        <img src={imgSrc} alt={project.media.alt} className='mt-4 md:mt-0' width={`256px`} height={"144px"} />
      )}
    </li>
  );
}

// src\assets\media\Project-0018.png

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
