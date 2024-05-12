import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sup = {
  verticalAlign: "super",
  fontSize: "smaller",
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.getElementById("message").addEventListener("input", validateMessage);

    return () => {
      if (document.getElementById("message")) {
        document.getElementById("message").removeEventListener("input", validateMessage);
      }
    };
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateMessage = () => {
    const messageField = document.getElementById("message");

    const constraint = new RegExp(/<(.|\n)*?>/g, "");
    console.log(constraint.test(messageField.value));

    if (constraint.test(messageField.value)) {
      messageField.setCustomValidity("HTML tags are not allowed in the message field.");
    } else {
      messageField.setCustomValidity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // for example, sending the data to an email or a server endpoint.
    validateMessage();
    console.log(formData);
    // Reset form fields
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  return (
    <div className='flex place-items-center w-full h-full'>
      <div className='flex flex-col place-items-center w-full max-w-[50%] mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col'>
            <label htmlFor='name'>
              Name<span style={sup}>*</span>:
            </label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='name'>Company:</label>
            <input type='text' id='company' name='company' value={formData.company} onChange={handleChange} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email'>
              Email<span style={sup}>*</span>:
            </label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={7}
              placeholder='HTML tags are not allowed in the message field.'
            />
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
