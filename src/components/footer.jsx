import logo from "../assets/media/LP_Logo.webp";

export function Footer() {
  return (
    <footer className='footer bg-stone-700 p-4'>
      <div className='footer-content flex flex-row'>
        <img src={logo} alt="Lee Paulison's Logo" className='hidden md:block' width={"84px"} height={"84px"} />
        <div className='flex flex-col items-center gap-4 mx-auto'>
          <div className='flex flex-row flex-wrap justify-center gap-2 md:gap-4'>
            <a
              href='https://www.facebook.com/lee.paulison'
              className='text-stone-300 hover:text-amber-500'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-facebook'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/lee-paulison-jr/'
              className='text-stone-300 hover:text-amber-500'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-linkedin'></i>
            </a>
            <a
              href='https://github.com/LeePJrAAC'
              className='text-stone-300 hover:text-amber-500'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-github'></i>
            </a>
            <a
              href='https://github.com/LeePJrAAC/portfolio'
              className='text-stone-300 hover:text-amber-500'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-github'></i> Repository
            </a>

            <a href='/contact' className='text-stone-300 hover:text-amber-500'>
              Contact Me
            </a>
          </div>
          <p className='text-stone-300 text-lg text-center'>
            &copy; {new Date().getFullYear()} <span className='text-amber-500'>Lee Paulison Jr</span> - All Rights
            Reserved
          </p>
        </div>
        <div className='hidden md:w-[80px]'></div>
      </div>
    </footer>
  );
}
