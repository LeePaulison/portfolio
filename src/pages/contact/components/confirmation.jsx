import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Confirmation = forwardRef(function Confirmation(props, ref) {
  const { data } = props;
  // Close the dialog
  const handleClose = () => {
    const dialog = ref.current;
    dialog.close();
  };

  return (
    <dialog
      ref={ref}
      className='rounded-md shadow-lg'
      role='dialog'
      aria-labelledby='dialog-title'
      aria-describedby='dialog-desc'
    >
      <header className='flex flex-row bg-amber-700 p-2'>
        <h2 className='my-auto text-stone-50 ms-2'>Confirmation</h2>
        <button id='close-button' onClick={() => handleClose()} aria-label='Close Button'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e8eaed'>
            <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
          </svg>
        </button>
      </header>
      <div className='dialog-body p-4 bg-stone-100'>
        <p>Dear {data.from_name}</p>
        <p>
          Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.
        </p>
        <p>Here are the details of your inquiry:</p>
        <ul className='list-disc list-inside'>
          <li>Email: {data.from_email}</li>
          <li>Company: {data.from_company}</li>
          <li>Subject: {data.from_subject}</li>
          <li>Message: {data.message}</li>
        </ul>
        <p>I strive to respond to all inquiries within 24-48hrs.</p>
        <p>Thank you for your patience.</p>
        <div>
          <p>Best regards,</p>
          <p>Lee Paulison Jr</p>
          <p>Front-end Developer</p>
        </div>
      </div>
    </dialog>
  );
});

Confirmation.propTypes = {
  data: PropTypes.object,
};
