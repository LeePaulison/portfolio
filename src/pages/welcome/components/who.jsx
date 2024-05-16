// images
import whoAmI from "../../../assets/media/who_am_i.jpg";

export function Who() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center p-16'>
      <img src={whoAmI} alt='Who am I?' className='w-[80%] md:w-[45%] me-4 rounded-[6px] shadow-lg' />
      <div className='w-full md:w-[75%] p-4 text-slate-900 rounded-[6px] timeline'>
        <h2 className='text-amber-700 text-3xl font-bold text-center'>Who am I?</h2>
        <p>
          I am an experienced web developer with a passion for learning and creating. My experience as a front-end
          developer has given me the opportunity to work on a variety of projects, from small personal projects such as
          this portfolio to large web applications. I am always looking to learn new technologies and improve my skills.
          Currently I am working at Advanced Automation Corporation (AAC) where we are developing an e-learning platform
          focusing on foreign language. I am excited to continue growing as a developer and to work on new and exciting
          projects.
        </p>
      </div>
    </div>
  );
}
