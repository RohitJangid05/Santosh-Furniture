import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';
import { AppContext } from '../Context/FurnitureContext';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const { assets } = useContext(AppContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m2nbjli',   // replace with your EmailJS service ID
        'template_6z5xz9o',  // replace with your EmailJS template ID
        form.current,
        'vX6Ugs0cKDqfQEhAF'       // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message, please try again.');
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
          {/* Left Side Image */}
          <img
            src={assets.contact}
            alt="Furniture customer service"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />

          {/* Contact Form */}
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
              type="submit"
              className="bg-gray-900 text-white py-2 rounded cursor-pointer hover:bg-gray-700 transition"
            >
              Send Message
            </button>

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
