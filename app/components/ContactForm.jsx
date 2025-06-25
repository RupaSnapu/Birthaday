// // // "use client";
// // // import React, { useState } from 'react';

// // // const ContactForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     message: ''
// // //   });
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState('');

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     setIsSubmitting(true);

// // //     try {
// // //       // Example: Replace with your API call
// // //       await new Promise((resolve) => setTimeout(resolve, 1000));
// // //       alert('Message sent! Thank you for contacting us.');
// // //       setFormData({ name: '', email: '', message: '' });
// // //     } catch (err) {
// // //       setError('Something went wrong. Please try again.');
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <form className="contact-form" onSubmit={handleSubmit} noValidate>
// // //       <h3>Contact Us</h3>

// // //       <label>
// // //         Name
// // //         <input
// // //           type="text"
// // //           name="name"
// // //           placeholder="Your Name"
// // //           required
// // //           value={formData.name}
// // //           onChange={handleChange}
// // //         />
// // //       </label>

// // //       <label>
// // //         Email
// // //         <input
// // //           type="email"
// // //           name="email"
// // //           placeholder="Your Email"
// // //           required
// // //           value={formData.email}
// // //           onChange={handleChange}
// // //         />
// // //       </label>

// // //       <label>
// // //         Message
// // //         <textarea
// // //           name="message"
// // //           placeholder="Your Message"
// // //           rows="5"
// // //           required
// // //           value={formData.message}
// // //           onChange={handleChange}
// // //         ></textarea>
// // //       </label>

// // //       {error && <p className="error">{error}</p>}

// // //       <button type="submit" disabled={isSubmitting}>
// // //         {isSubmitting ? 'Sending...' : 'Send Message'}
// // //       </button>

// // //       <style jsx>{`
// // //         .contact-form {
// // //           max-width: 500px;
// // //           margin: 2rem auto;
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 1rem;
// // //           background: #f9f9f9;
// // //           padding: 2rem;
// // //           border-radius: 8px;
// // //           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
// // //         }

// // //         .contact-form h3 {
// // //           text-align: center;
// // //           margin-bottom: 1rem;
// // //         }

// // //         .contact-form label {
// // //           display: flex;
// // //           flex-direction: column;
// // //           font-weight: 500;
// // //         }

// // //         .contact-form input,
// // //         .contact-form textarea {
// // //           margin-top: 0.5rem;
// // //           padding: 0.75rem;
// // //           border: 1px solid #ccc;
// // //           border-radius: 5px;
// // //           font-size: 1rem;
// // //           transition: border-color 0.2s;
// // //         }

// // //         .contact-form input:focus,
// // //         .contact-form textarea:focus {
// // //           border-color: #0070f3;
// // //           outline: none;
// // //         }

// // //         .contact-form button {
// // //           background: #0070f3;
// // //           color: white;
// // //           border: none;
// // //           padding: 0.75rem;
// // //           border-radius: 5px;
// // //           cursor: pointer;
// // //           font-size: 1rem;
// // //           transition: background 0.3s;
// // //         }

// // //         .contact-form button:disabled {
// // //           background: #ccc;
// // //           cursor: not-allowed;
// // //         }

// // //         .contact-form button:hover:not(:disabled) {
// // //           background: #005bb5;
// // //         }

// // //         .error {
// // //           color: red;
// // //           font-size: 0.9rem;
// // //           text-align: center;
// // //         }
// // //       `}</style>
// // //     </form>
// // //   );
// // // };

// // // export default ContactForm;

// "use client";
// import React, { useState } from "react";
// import { FaWhatsapp, FaInstagram, FaEnvelope, FaFacebookF, FaCheck, FaPhoneAlt } from "react-icons/fa";

// export default function ContactUsWithMap() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setIsAnimating(true);

//     try {
//       // Simulate network request
//       await new Promise((res) => setTimeout(res, 1500));
//       setIsSuccess(true);
//       setFormData({
//         firstName: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Submission failed:", err);
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => {
//         setIsAnimating(false);
//         setIsSuccess(false);
//       }, 2500); // hide success after a while
//     }
//   };

//   return (
//     <section className="contact_us_section">
//       <div className={`container ${isAnimating ? "animating" : ""}`}>
//         <div className="form-box">
//           {isSuccess ? (
//             <div className="success-circle">
//               <FaCheck size={40} color="#fff" />
//               <p>Message Sent Successfully!</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="form-wrapper">
//               <h3 className="section-head">Get in Touch</h3>
//               <p className="section-subhead">We reply within 24 hours</p>

//               <div className="form-grid">
//                 <label>
//                   <span>First Name</span>
//                   <input
//                     name="firstName"
//                     placeholder="Enter first name..."
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   <span>Email</span>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter email..."
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   <span>Phone</span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter phone number..."
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </label>
//                 <label>
//                   <span>What do you have in mind?</span>
//                   <textarea
//                     name="message"
//                     placeholder="Tell us more..."
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </label>
//               </div>

//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           )}
//         </div>

//         <div className="info-card">
//           <h3 className="section-head">Where We Shoot</h3>
//           <p className="section-subhead">Serving birthday celebrations across the UK</p>

//           <div className="map-wrapper">
//             <iframe
//               title="Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.03284184299!2d-0.1277582!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f2a3a8c7f%3A0x4be1f4f34e9355ec!2sLondon!5e0!3m2!1sen!2suk!4v1712754699173"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           <h4 className="direct-contact-title">Direct Contact</h4>
//           <div className="direct-contact-icons">
//             <a href="https://wa.me/441234567890" target="_blank" aria-label="WhatsApp">
//               <FaWhatsapp color="#25D366" size={24} />
//             </a>
//             <a href="mailto:hello@example.com" target="_blank" aria-label="Email">
//               <FaEnvelope color="#D44638" size={24} />
//             </a>
//             <a href="https://www.instagram.com/yourprofile" target="_blank" aria-label="Instagram">
//               <FaInstagram color="#E4405F" size={24} />
//             </a>
//             <a href="https://www.facebook.com/yourpage" target="_blank" aria-label="Facebook">
//               <FaFacebookF color="#1877F2" size={24} />
//             </a>
//           </div>
//           <a href="tel:+441234567890" className="call-btn">
//             <FaPhoneAlt size={16} /> Call Us
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         .contact_us_section {
//           font-family: Nunito, sans-serif;
//           padding: 60px 20px;
//           background: #f9f9f9;
//         }

//         .container {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 40px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .container.animating {
//           animation: pulse 0.5s ease;
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.02); }
//           100% { transform: scale(1); }
//         }

//         .form-box, .info-card {
//           flex: 1 1 400px;
//           background: #fff;
//           padding: 40px;
//           border-radius: 10px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
//           position: relative;
//         }

//         .section-head {
//           font-size: 28px;
//           font-weight: 800;
//           text-align: center;
//           color: #03a9f4;
//           margin-bottom: 10px;
//         }

//         .section-subhead {
//           text-align: center;
//           color: #666;
//           margin-bottom: 20px;
//         }

//         .form-grid label {
//           display: block;
//           margin-bottom: 20px;
//         }

//         .form-grid span {
//           font-size: 14px;
//           color: #999;
//           margin-bottom: 6px;
//           display: block;
//         }

//         .form-grid input,
//         .form-grid textarea {
//           width: 100%;
//           padding: 12px 15px;
//           border: 2px solid #eee;
//           border-radius: 4px;
//           font-size: 16px;
//         }

//         .form-grid input:focus,
//         .form-grid textarea:focus {
//           border-color: #03a9f4;
//           outline: none;
//         }

//         button {
//           background: #03a9f4;
//           color: #fff;
//           font-size: 18px;
//           font-weight: 700;
//           border: none;
//           padding: 15px;
//           border-radius: 40px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//           width: 100%;
//         }

//         button:disabled {
//           background: #ccc;
//           cursor: not-allowed;
//         }

//         .success-circle {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100%;
//           text-align: center;
//           animation: pop 0.5s ease;
//         }

//         .success-circle {
//           background: #4caf50;
//           border-radius: 50%;
//           width: 120px;
//           height: 120px;
//           margin: 40px auto;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .success-circle p {
//           margin-top: 20px;
//           font-size: 18px;
//           color: #4caf50;
//           font-weight: 700;
//         }

//         @keyframes pop {
//           0% { transform: scale(0.8); opacity: 0; }
//           100% { transform: scale(1); opacity: 1; }
//         }

//         .info-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .map-wrapper {
//           width: 100%;
//           margin: 20px 0;
//         }

//         .map-wrapper iframe {
//           width: 100%;
//           height: 300px;
//           border: none;
//           border-radius: 8px;
//         }

//         .direct-contact-title {
//           font-size: 20px;
//           margin-bottom: 10px;
//           text-align: center;
//           color: #03a9f4;
//         }

//         .direct-contact-icons {
//           display: flex;
//           gap: 20px;
//           justify-content: center;
//           margin-bottom: 20px;
//         }

//         .direct-contact-icons a {
//           background: #fff;
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//           transition: transform 0.2s;
//         }

//         .direct-contact-icons a:hover {
//           transform: scale(1.1);
//         }

//         .call-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: #25D366;
//           color: #fff;
//           font-weight: 600;
//           padding: 12px 24px;
//           border-radius: 30px;
//           text-decoration: none;
//           transition: background 0.3s ease;
//         }

//         .call-btn:hover {
//           background: #1ebd57;
//         }

//         @media (max-width: 768px) {
//           .container {
//             flex-direction: column;
//           }

//           .map-wrapper iframe {
//             height: 240px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaFacebookF,
  FaCheck,
  FaPhoneAlt,
  FaYoutube,
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
      await new Promise((res) => setTimeout(res, 1200));
      setIsSuccess(true);
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 2500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="bg-gradient-to-r from-fuchsia-100 to-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
        {/* Form Card */}
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
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col space-y-4"
            >
              <h3 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-bold text-center">
                Get in Touch
              </h3>
              <p className="text-center text-xs xl:text-[15px] 2xl:text-2xl  text-gray-600">
                We reply within 24 hours
              </p>
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">First Name</span>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name..."
                  required
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email..."
                  required
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                />
              </label>
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
              <label className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">
                  What do you have in mind?
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows="5"
                  required
                  className="border-2 border-gray-200 rounded px-4 py-3 focus:border-fuchsia-500 outline-none"
                ></textarea>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-full font-bold text-white transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-fuchsia-500 hover:bg-fuchsia-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>

        {/* Info Card */}
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
