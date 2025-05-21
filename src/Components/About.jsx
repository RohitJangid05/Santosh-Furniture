import { useContext, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import { AppContext } from '../Context/FurnitureContext';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { assets } = useContext(AppContext);

  // Refs for each image
  const leftImage1 = useRef(null);
  const rightImage1 = useRef(null);
  const leftImage2 = useRef(null);
  const rightImage2 = useRef(null);

useEffect(() => {
  // Animate left images from left (x: -130)
  gsap.from(leftImage1.current, {
    scrollTrigger: {
      trigger: leftImage1.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",  // <-- reverse on scroll up
    },
    x: -130,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(leftImage2.current, {
    scrollTrigger: {
      trigger: leftImage2.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: -130,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Animate right images from right (x: 130)
  gsap.from(rightImage1.current, {
    scrollTrigger: {
      trigger: rightImage1.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: 130,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(rightImage2.current, {
    scrollTrigger: {
      trigger: rightImage2.current,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
    x: 130,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
}, []);


  return (
    <>
      <NavBar />
      <div className="px-6 py-10 md:px-20 max-w-6xl mx-auto text-[#333]">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

        {/* Section 1 (left image) */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <img
            ref={leftImage1}
            src={assets.about1}
            alt="Crafted furniture"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p>
              <strong>Santosh Furniture</strong> has been crafting comfort and elegance since 2005. With a legacy of excellence and dedication to quality, we specialize in premium furniture made from the finest woods including <strong>Teak Wood</strong>, <strong>Pine Wood</strong>, <strong>Beech Wood</strong>, and <strong>Hassan Wood</strong>.
            </p>
          </div>
        </div>

        {/* Section 2 (right image) */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p>
              Our journey began with a passion for design and a commitment to providing timeless furniture that complements every home. Over the years, we’ve grown into a trusted name in the industry, known for our craftsmanship and attention to detail.
            </p>
          </div>
          <img
            ref={rightImage1}
            src={assets.about2}
            alt="Workshop image"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Section 3 (left image) */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <img
            ref={leftImage2}
            src={assets.about3}
            alt="Product range"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p>We offer a wide range of furniture including:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Sofas</li>
              <li>Beds</li>
              <li>Doors & Door Frames</li>
              <li>Chairs</li>
              <li>Dining Sets</li>
            </ul>
          </div>
        </div>

        {/* Section 4 (right image) */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-10 gap-8">
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p>
              Every piece we build reflects our belief in durability, aesthetics, and comfort. Whether you're furnishing a new home or upgrading your interiors, <strong>Santosh Furniture</strong> is your destination for timeless wooden furniture.
            </p>
          </div>
          <img
            ref={rightImage2}
            src={assets.about4}
            alt="Furniture lifestyle"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default About;
