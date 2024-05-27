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
  const dialog = useRef(null);
  const inputRefs = useRef([]);

  const resetFormData = () => {
    setFormData({
      from_name: "",
      from_company: "",
      from_email: "",
      message: "",
    });
  };

  const buildInputRefs = (elem) => {
    if (elem && !inputRefs.current.includes(elem)) {
      inputRefs.current.push(elem);
    }
  };

  const validateMessage = useCallback(() => {
    if (!inputRefs.current) return;

    const constraint = new RegExp(/<(.|\n)*?>/g, "");

    inputRefs.current.forEach((input) => {
      if (input.name === "from_name" || input.name === "from_company" || input.name === "message") {
        if (constraint.test(input.value)) {
          input.setCustomValidity("HTML tags are not allowed in the " + input.id + " field.");
          setIsFormValid(false);
        } else {
          input.setCustomValidity("");
        }
      }
    });
    return setIsFormValid(true);
  }, []);

  const initializeInputValidation = useCallback(() => {
    if (!inputRefs.current) return;

    inputRefs.current.forEach((input) => {
      input.addEventListener("input", validateMessage);
    });
  }, [validateMessage]);

  const removeInputValidation = useCallback(() => {
    if (!inputRefs.current) return;

    inputRefs.current.forEach((input) => {
      input.addEventListener("input", validateMessage);
    });
  }, [validateMessage]);

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

  // Remove role attribute from error messages
  // const clearErrorAlert = () => {
  //   const errorMessages = document.querySelectorAll("[role='alert']");
  //   errorMessages.forEach((message) => {
  //     message.removeAttribute("role");
  //   });
  // };

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

      // Send reCAPTCHA token to the server
      const response = await fetch(recaptchaURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recaptcha: recaptchaResponse }),
      });

      // Parse the response from the server
      const data = await response.json();

      // Check if the server response is successful
      // If successful, process the form data or send email
      // Response also contains the reCAPTCHA score
      // Score may provide additional information for further processing
      if (data.success) {
        sendEmail(formData); // Send email
        // Reset form fields
        resetFormData();
        return true;
      } else {
        // Reset form fields
        resetFormData();
        return false;
      }
    } catch (error) {
      // Any error in the client-side validation
      console.error("Client Error verifying reCAPTCHA", error);
      return false;
    }
  };

  // Show confirmation dialog
  // Dialog is shown regardless of the reCAPTCHA validation result
  // This may reduce the chance of reCAPTCHA token abuse
  const showConfirmationDialog = () => {
    if (dialog) {
      dialog.current.showModal();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    validateMessage();
    if (!isFormValid) return;

    // Handle reCAPTCHA
    handleReCaptcha();

    // Show confirmation dialog
    showConfirmationDialog();
  };

  return (
    <div className='flex place-items-center w-full h-full'>
      <div className='flex flex-col place-items-center w-full lg:max-w-[50%] mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='w-full' aria-live='polite'>
          <div className='flex flex-col mb-3'>
            <label htmlFor='name'>
              Name<span style={sup}>*</span>:{" "}
              {formData.from_name === "" && (
                <span role='alert' id='name-error' className='text-red-600'>
                  Name is required.
                </span>
              )}
            </label>
            <input
              type='text'
              id='name'
              name='from_name'
              value={formData.from_name}
              onChange={handleChange}
              required
              aria-required='true'
              ref={(e) => buildInputRefs(e)}
              placeholder='John Doe'
              aria-invalid={!formData.from_name}
              aria-describedby='name-error'
            />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='company'>Company:</label>
            <input
              type='text'
              id='company'
              name='from_company'
              value={formData.from_company}
              onChange={handleChange}
              ref={(e) => buildInputRefs(e)}
            />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='email'>
              Email<span style={sup}>*</span>:{" "}
              {formData.from_email === "" && (
                <span role='alert' id='email-error' className='text-red-600'>
                  Email is required.
                </span>
              )}
            </label>
            <input
              type='email'
              id='email'
              name='from_email'
              value={formData.from_email}
              onChange={handleChange}
              required
              aria-required='true'
              ref={(e) => buildInputRefs(e)}
              placeholder='john.doe@example.com'
              aria-invalid={!formData.from_email}
              aria-describedby='email-error'
            />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={7}
              placeholder='HTML tags are not allowed in the message field.'
              ref={(e) => buildInputRefs(e)}
            />
          </div>
          <div className='flex flex-row gap-4 justify-end'>
            <button type='submit' className='btn-submit'>
              Submit
            </button>
            <button type='reset' className='btn' onClick={() => resetFormData()}>
              Reset
            </button>
            <button
              type='button'
              className='btn'
              onClick={() => {
                if (window.history?.length > 1) {
                  navigate(-1); // Go back to the previous page - if available
                } else {
                  navigate("/"); // Redirect to the home page
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
