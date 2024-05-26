// react
import { useState, useEffect, useCallback, useRef } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// emailjs
import emailjs from "@emailjs/browser";
// components
import { Confirmation } from "./components/confirmation";

const sup = {
  verticalAlign: "super",
  fontSize: "smaller",
};

export function Contact_Testing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from_name: "",
    from_company: "",
    from_email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const grecaptcha = window.grecaptcha;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dialog = useRef(null);

  const initializeInputValidation = useCallback(() => {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    if (nameInput) {
      nameInput.addEventListener("input", validateMessage);
    }
    if (messageInput) {
      messageInput.addEventListener("input", validateMessage);
    }
  }, []);

  const removeInputValidation = useCallback(() => {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    if (nameInput) {
      nameInput.removeEventListener("input", validateMessage);
    }
    if (messageInput) {
      messageInput.removeEventListener("input", validateMessage);
    }
  }, []);

  useEffect(() => {
    initializeInputValidation();

    return () => {
      removeInputValidation();
    };
  }, [initializeInputValidation, removeInputValidation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateMessage = () => {
    const nameField = document.getElementById("name");
    const messageField = document.getElementById("message");

    const constraint = new RegExp(/<(.|\n)*?>/g, "");

    if (constraint.test(nameField.value)) {
      nameField.setCustomValidity("HTML tags are not allowed in the name field.");
      setIsFormValid(false);
    } else {
      nameField.setCustomValidity("");
    }
    if (constraint.test(messageField.value)) {
      messageField.setCustomValidity("HTML tags are not allowed in the message field.");
      setIsFormValid(false);
    } else {
      messageField.setCustomValidity("");
    }

    return setIsFormValid(true);
  };

  const sendEmail = (data) => {
    emailjs
      .send(import.meta.env.VITE_APP_EJS_SERVICE, import.meta.env.VITE_APP_EJS_TEMPLATE, data, {
        publicKey: import.meta.env.VITE_APP_EJS_PUBLIC,
      })
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  const handleReCaptcha = async () => {
    if (!grecaptcha) {
      return;
    }

    const recaptchaResponse = await grecaptcha.execute(import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY, {
      action: "contact_form",
    });

    if (recaptchaResponse) {
      validatereCAPTCHA(recaptchaResponse);
    }
  };

  // Client-side: validatereCAPTCHA function
  const validatereCAPTCHA = async (recaptchaResponse) => {
    try {
      // Replace with your environment variable setup if needed
      const recaptchaURL = import.meta.env.VITE_APP_RECAPTCHA_URL;
      // Testing URL
      // const recaptchaURL = import.meta.env.VITE_APP_RECAPTCHA_TESTING_URL;

      const response = await fetch(recaptchaURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recaptcha: recaptchaResponse }),
      });

      const data = await response.json();

      if (data.success) {
        // Process form data or send email
        sendEmail(formData); // Send email
        // Reset form fields
        setFormData({ from_name: "", from_company: "", from_email: "", message: "" });
        setShowConfirmation(true);
        return true;
      } else {
        // Reset form fields
        setFormData({ from_name: "", from_company: "", from_email: "", message: "" });
        setShowConfirmation(true);
        return false;
      }
    } catch (error) {
      console.error("Client Error verifying reCAPTCHA", error);
      return false;
    }
  };

  const showConfirmationDialog = () => {
    if (dialog) {
      dialog.current.showModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateMessage();
    if (!isFormValid) return;
    handleReCaptcha();
    showConfirmationDialog();
  };

  console.log("Show Confirmation: ", showConfirmation);

  return (
    <div className='flex place-items-center w-full h-full'>
      <div className='flex flex-col place-items-center w-full lg:max-w-[50%] mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col'>
            <label htmlFor='name'>
              Name<span style={sup}>*</span>:
            </label>
            <input type='text' id='name' name='from_name' value={formData.from_name} onChange={handleChange} required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='name'>Company:</label>
            <input type='text' id='company' name='from_company' value={formData.from_company} onChange={handleChange} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email'>
              Email<span style={sup}>*</span>:
            </label>
            <input
              type='email'
              id='email'
              name='from_email'
              value={formData.from_email}
              onChange={handleChange}
              required
            />
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
                  navigate("/"); // Replace '/home' with your desired route
                }
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Confirmation ref={dialog} />
    </div>
  );
}
