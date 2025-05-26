import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';
import { AppContext } from '../Context/FurnitureContext';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const buttonRef = useRef()
  const [buttonText, setButtonText] = useState("Send Message")
  const { assets } = useContext(AppContext);
  
const sendEmail = (e) => {
  e.preventDefault();
  buttonRef.current.disabled = true;
  setButtonText("Sending...");

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      (result) => {
        form.current.reset();
        setButtonText("Send Message");
        buttonRef.current.disabled = false;
        toast.success('Message sent successfully!')
      },
      (error) => {
        setButtonText("Send Message");
        buttonRef.current.disabled = false;
        toast.error('Failed to send message, please try again.')
      }
    );
};


  return (
    <>
      <NavBar />
      <div className="px-6 py-10 md:px-20 max-w-6xl mx-auto text-[#333]">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>

        <p className="text-lg text-center mb-10">
          Have questions about our furniture, need a custom design, or just want to say hello? We're here to help! Fill out the form below and our team will get back to you shortly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <img
            src={assets.contact}
            alt="Furniture customer service"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <label className="font-medium">Name:
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Your full name"
              />
            </label>

            <label className="font-medium">Email:
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Your email address"
              />
            </label>

            <label className="font-medium">Message:
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Your message"
              />
            </label>

            <button
              ref={buttonRef}
              type="submit"
              className="bg-gray-900 text-white py-2 rounded cursor-pointer hover:bg-gray-700 transition"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
