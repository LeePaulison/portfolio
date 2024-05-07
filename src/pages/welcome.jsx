import heroLogo from "../assets/media/Hero_Logo.webp";

export const Welcome = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center p-16 bg-stone-200'>
        <div className='text-2xl max-w-[50%] me-8'>
          I build pixel-perfect accessible engaging online experiences with a focus in 508a compliance. My name is{" "}
          <span className='text-3xl font-bold'>Lee Paulison</span>, and I am a Junior Frontend Developer.
        </div>
        <img src={heroLogo} width={`250px`} />
      </div>
    </>
  );
};
