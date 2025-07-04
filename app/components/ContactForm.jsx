// "use client";
// import React, { useState } from "react";
// import {
//   FaWhatsapp,
//   FaInstagram,
//   FaEnvelope,
//   FaFacebookF,
//   FaCheck,
//   FaPhoneAlt,
//   FaYoutube,
// } from "react-icons/fa";

// export default function ContactUsWithMap() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await new Promise((res) => setTimeout(res, 1200));
//       setIsSuccess(true);
//       setFormData({
//         firstName: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//       setTimeout(() => setIsSuccess(false), 2500);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="Contact" className="bg-gradient-to-r from-fuchsia-100 to-amber-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
//         {/* Form Card */}
//         <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg relative flex items-center justify-center">
//           {isSuccess ? (
//             <div className="flex flex-col items-center animate-bounce">
//               <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
//                 <FaCheck className="text-white text-3xl" />
//               </div>
//               <p className="mt-4 text-green-600 font-semibold text-lg">
//                 Message Sent Successfully!
//               </p>
//             </div>
//           ) : (
//             <form
//               onSubmit={handleSubmit}
//               className="w-full flex flex-col space-y-4"
//             >
//               <h3 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-bold text-center">
//                 Get in Touch
//               </h3>
//               <p className="text-center text-xs xl:text-[15px] 2xl:text-2xl  text-gray-600">
//                 We reply within 24 hours
//               </p>
//               <label className="flex flex-col">
//                 <span className="text-sm text-gray-500 mb-1">Name</span>
//                 <input
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter Name..."
//                   required
//                   className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-sm text-gray-500 mb-1">Email</span>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter email..."
//                   required
//                   className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-sm text-gray-500 mb-1">Phone</span>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter phone number..."
//                   className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 <span className="text-sm text-gray-500 mb-1">
//                   What do you have in mind?
//                 </span>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us more..."
//                   rows="5"
//                   required
//                   className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
//                 ></textarea>
//               </label>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-3 rounded-full font-bold text-white transition ${
//                   isSubmitting
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-fuchsia-500 hover:bg-fuchsia-600"
//                 }`}
//               >
//                 {isSubmitting ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           )}
//         </div>

//         {/* Info Card */}
      //   <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
      //     <h3 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-bold text-center  mb-2">
      //       Where We Shoot
      //     </h3>
      //     <p className="text-center text-xs xl:text-[15px] 2xl:text-2xl  text-gray-600 mb-6">
      //       Serving birthday celebrations across the UK
      //     </p>

      //     <div className="w-full mb-6 rounded overflow-hidden">
      //       <iframe
      //         title="Office Location"
      //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.03284184299!2d-0.1277582!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f2a3a8c7f%3A0x4be1f4f34e9355ec!2sLondon!5e0!3m2!1sen!2suk!4v1712754699173"
      //         loading="lazy"
      //         allowFullScreen
      //         className="w-full h-64 rounded"
      //       ></iframe>
      //     </div>

      //     <h4 className="text-[20px] xl:text-[20px] 2xl:text-2xl  font-semibold text-fuchsia-600 mb-4">
      //       Direct Contact
      //     </h4>
      //     <div className="flex gap-4 mb-6">
      //       <a
      //         href="https://wa.me/441234567890"
      //         target="_blank"
      //         className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
      //       >
      //         <FaWhatsapp className="text-green-500 text-xl" />
      //       </a>
      //       <a
      //         href="mailto:info@snapuphotography.com"
      //         target="_blank"
      //         className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
      //       >
      //         <FaEnvelope className="text-red-500 text-xl" />
      //       </a>
      //       <a
      //         href="https://www.instagram.com/snapuphotography/?hl=en"
      //         target="_blank"
      //         className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
      //       >
      //         <FaInstagram className="text-pink-500 text-xl" />
      //       </a>
      //       <a
      //         href="https://www.facebook.com/snapuphotography1/"
      //         target="_blank"
      //         className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
      //       >
      //         <FaFacebookF className="text-blue-600 text-xl" />
      //       </a>
      //       <a
      //         href="https://www.youtube.com/@snapuphotography"
      //         target="_blank"
      //         className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
      //       >
      //         <FaYoutube className="text-red-600 text-xl" />
      //       </a>
      //     </div>
      //     <a
      //       href="tel:+441234567890"
      //       className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition"
      //     >
      //       <FaPhoneAlt /> Call Us
      //     </a>
      //   </div>
      // </div>
//     </section>
//   );
// }


'use client';
import React, { useState } from "react";
import { db } from "../Admin/Firebase/config"; // ✅ adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";
import {
  FaWhatsapp, FaInstagram, FaEnvelope, FaFacebookF, FaCheck,
  FaPhoneAlt, FaYoutube
} from "react-icons/fa";

export default function ContactUsWithMap() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

        try {
        // 1. Save to Firestore
        await addDoc(collection(db, "contact_messages"), {
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          createdAt: Timestamp.now(),
        });

        // 2. Send email via API
        await fetch("/Admin/ContactManager/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.firstName,
            email: formData.email,
          }),
        });

        setIsSuccess(true);
        setFormData({ firstName: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSuccess(false), 2500);
      } catch (err) {
        console.error("Error saving contact:", err);
      } 
      finally {
            setIsSubmitting(false);
          }
  };

  return (
    <section id="Contact" className="bg-gradient-to-r from-fuchsia-100 to-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
        {/* FORM Card */}
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg relative flex items-center justify-center">
          {isSuccess ? (
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
                <FaCheck className="text-white text-3xl" />
              </div>
              <p className="mt-4 text-green-600 font-semibold text-lg">
                Message Sent Successfully!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
              <h3 className="text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl font-bold text-center">Get in Touch</h3>
              <p className="text-center text-xs xl:text-[15px] 2xl:text-2xl text-gray-600">We reply within 24 hours</p>

              {/* Name Field */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Name</span>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Name..."
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>

              {/* Email Field */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email..."
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>

              {/* Phone Field */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number..."
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>

              {/* Message Field */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">What do you have in mind?</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell us more..."
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-full font-bold text-white transition ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-fuchsia-500 hover:bg-fuchsia-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>

        {/* Your right-side info card stays unchanged */}
          <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
          <h3 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-bold text-center  mb-2">
            Where We Shoot
          </h3>
          <p className="text-center text-xs xl:text-[15px] 2xl:text-2xl  text-gray-600 mb-6">
            Serving birthday celebrations across the UK
          </p>

          <div className="w-full mb-6 rounded overflow-hidden">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.03284184299!2d-0.1277582!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f2a3a8c7f%3A0x4be1f4f34e9355ec!2sLondon!5e0!3m2!1sen!2suk!4v1712754699173"
              loading="lazy"
              allowFullScreen
              className="w-full h-64 rounded"
            ></iframe>
          </div>

          <h4 className="text-[20px] xl:text-[20px] 2xl:text-2xl  font-semibold text-fuchsia-600 mb-4">
            Direct Contact
          </h4>
          <div className="flex gap-4 mb-6">
            <a
              href="https://wa.me/441234567890"
              target="_blank"
              className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
            </a>
            <a
              href="mailto:info@snapuphotography.com"
              target="_blank"
              className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
            >
              <FaEnvelope className="text-red-500 text-xl" />
            </a>
            <a
              href="https://www.instagram.com/snapuphotography/?hl=en"
              target="_blank"
              className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
            <a
              href="https://www.facebook.com/snapuphotography1/"
              target="_blank"
              className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
            >
              <FaFacebookF className="text-blue-600 text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@snapuphotography"
              target="_blank"
              className="bg-white p-3 rounded-full shadow hover:scale-110 transition"
            >
              <FaYoutube className="text-red-600 text-xl" />
            </a>
          </div>
          <a
            href="tel:+441234567890"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition"
          >
            <FaPhoneAlt /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
