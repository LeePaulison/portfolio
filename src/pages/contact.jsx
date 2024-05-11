import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // for example, sending the data to an email or a server endpoint.
    console.log(formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='flex place-items-center w-full h-full'>
      <div className='flex flex-col place-items-center w-full max-w-[50%] mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows={7} />
          </div>
          <div className='flex flex-row gap-4 justify-end'>
            <button type='submit' className='btn-submit'>
              Submit
            </button>
            <button type='reset' className='btn' onClick={() => setFormData({ name: "", email: "", message: "" })}>
              Reset
            </button>
            <button
              type='button'
              className='btn'
              onClick={() => {
                if (window.history?.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/home"); // Replace '/home' with your desired route
                }
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
