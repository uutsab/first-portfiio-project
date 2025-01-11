import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

export function Hirebutton(props) {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_s0zeeu4", "template_oyxyh7o", toSend, "7YR7rz_4CcAb6fEW7")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="bg-blue-200 px-5 py-4 rounded-sm h-full">
        <form
          className=" flex flex-col items-center [&>*]:mb-2"
          onSubmit={onSubmit}
        >
          <input
            className="rounded-lg px-2 py-1"
            type="text"
            name="first_name"
            placeholder="First_name"
            value={toSend.first_name}
            onChange={handleChange}
          />
          <input
            className="rounded-lg px-2 py-1"
            type="text"
            name="last_name"
            placeholder="Last name"
            value={toSend.last_name}
            onChange={handleChange}
          />
          <input
            className="rounded-lg px-2 py-1"
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            className="rounded-lg px-2 py-1"
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button
            className="bg-blue-300 w-20 px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-white"
            type="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
