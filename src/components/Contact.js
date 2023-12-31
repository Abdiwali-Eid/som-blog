import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [send, setsend] = useState(false);
  // sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u8fjxv6",
        "template_vy2s2h9",
        form.current,
        "C_ZWCXqfm9o9csZDB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      className="mt-20 flex flex-wrap sm:flex-nowrap items-center 
    space-x-5 justify-around p-10 sm:px-6 lg:px-8"
      initial={{ x: 100, y: 100 }}
      animate={{ y: 0, x: 0 }}
    >
      {/* left */}
      <div className="space-y-10">
        <h1 className="font-bold text-4xl space-y-12" >Contact Me</h1>
        <p className="text-gray-400" style={{textAlign:'justify'}}>
          {/* pleasecontact me directly at cabdiwalibashir232@Gmail.com or through this form */}
          please contact me directly at <br/>cabdiwalibashir232@gmail.com<br/> or through this form
        </p>
        <div className="text-md flex text-gray-500 space-x-2 items-center">
          <BsFillTelephoneInboundFill />
          <p>+252619779420</p>
        </div>
        <div className="text-md flex text-gray-500 space-x-2 items-center">
          <FiMail />
          <p>cabdiwalibashir232@Gmail.com</p>
        </div>
        <div className="text-md flex text-gray-500 space-x-2 items-center">
          <MdLocationPin />
          <p>mogadisho,somalia</p>
        </div>
      </div>
      {/* right */}
      <form
        className="w-full max-w-md space-y-6"
        onSubmit={sendEmail}
        ref={form}
      >
        <input
          type="text"
          placeholder="name"
          className="rounde-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none
        focus:ring-indigo-500 focus:border-inigo"
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          className="rounde-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none
        focus:ring-indigo-500 focus:border-inigo"
          name="email"
        />
        <textarea
          type="text"
          placeholder="message"
          className="rounde-sm p-8 w-full border
          border-gray-200 placeholder-gray-400 focus:outline-none
          focus:ring-indigo-500 focus:border-inigo"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 text-lg rounded-md text-white bg-blue-700 focus:outline-none focus:ring-2 "
        >
          send message
        </button>
        {send && (
          <div
            className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg  "
            role="alert"
          >
            <span className="font-medium">Thanks for your reaction </span> i wil
            contact you as soon as possible
          </div>
        )}
      </form>
    </motion.div>
  );
}

export default Contact;
