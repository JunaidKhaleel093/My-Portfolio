import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const contactInfoRef = useRef(null);

  const handleButtonClick = () => {
    setShowContactInfo(true);
  };

  const handleClickOutside = (e) => {
    if (contactInfoRef.current && !contactInfoRef.current.contains(e.target)) {
      setShowContactInfo(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center py-12 bg-[#061521]"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="max-w-[800px] w-full bg-gradient-to-r from-[#061521] to-[#0c2438] p-6 rounded-lg shadow-lg text-center relative">
          <h2
            className="text-2xl font-bold text-[#3a4d76] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to make something awesome?
          </h2>
          <p className=" text-blue-200 text-md mb-6">
          Hit the button for all the details
          </p>

          {!showContactInfo && (
            <button
              onClick={handleButtonClick}
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
            >
              Contact Me →
            </button>
          )}

          {showContactInfo && (
            <div
              ref={contactInfoRef} 
              className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#061521] to-[#341f52] border-2 border-[#0a141c] rounded-lg p-6 shadow-lg w-full"
            >
              <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}  className="text-blue-200 text-lg">📧 Email: junaidkhaleel.093@gmail.com</p>
              <p style={{ fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}  className="text-blue-200 text-lg mt-2">📞 Phone: +91 8217009727</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
