import { useNavigate } from "react-router-dom";

import heroLogo from "../../../assets/media/Hero_Logo.webp";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center p-4 lg:p-16 bg-stone-200'>
      <div className='md:max-w-[75%] lg:max-w-[50%] me-8'>
        <div className='text-2xl'>
          I build pixel-perfect accessible engaging online experiences with a focus in 508a compliance. My name is{" "}
          <span className='text-3xl font-bold'>Lee Paulison</span>, and I am a Junior Front-end Developer.
        </div>
        <button className='btn-submit mt-3' onClick={() => navigate("/contact")}>
          Contact Me
        </button>
      </div>
      <img
        src={heroLogo}
        width={`250px`}
        height={`250px`}
        className='m-4 lg:m-0'
        alt='Hero Logo'
        aria-description='Abstract representation of a person in a wheelchair.'
      />
    </div>
  );
}
