import { useNavigate } from 'react-router-dom';
const MapSection = () => {
  let navigate = useNavigate()
  return (
    <>
    <hr className="h-0.5 border-none bg-zinc-400" />
      <section className="w-full text-gray-800 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-gray-600 mb-4">
              Come visit us to see our unique handmade furniture and find the perfect piece for your home.
            </p>
            <div className="text-sm text-gray-700">
              <p><strong>Address:</strong></p>
              <p>Santosh Furniture</p>
              <p>Omkar Nagar Angol Main Road, Belagavi, Karnataka 590011</p>
              <p>India</p>
              <p className="mt-2"><strong>Phone:</strong> +91 9448122329</p>
              <p><strong>Email:</strong> santoshfurniture@gmail.com</p>
              <button
               onClick={() => {navigate('/about'); scrollTo(0,0)}}
               className="px-4 py-2 mt-2 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">About us</button>
            </div>
          </div>

          <div className="w-full h-64 md:h-80 lg:h-96 rounded-md overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.571713166904!2d74.5106834783263!3d15.826521345673415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67b226fce1c1%3A0xa230e8646da43f94!2sSantosh%20furniture!5e0!3m2!1sen!2sin!4v1744456263744!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SF Furniture Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
