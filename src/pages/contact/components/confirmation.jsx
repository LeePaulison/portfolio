import { forwardRef } from "react";

export const Confirmation = forwardRef(function Confirmation(props, ref) {
  const handleClose = () => {
    const dialog = ref.current;
    dialog.close();
  };

  return (
    <dialog ref={ref} className='w-full lg:w-[50%] rounded-md'>
      <header className='flex flex-row bg-stone-200 p-2'>
        <h2 className='my-auto ms-2'>Confirmation</h2>
        <button id='close-button' onClick={() => handleClose()}>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e8eaed'>
            <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
          </svg>
        </button>
      </header>
      <div className='p-4'>
        <h1 className='mb-2'>Thank you for your message!</h1>
        <p>We will get back to you as soon as possible.</p>
      </div>
    </dialog>
  );
});
