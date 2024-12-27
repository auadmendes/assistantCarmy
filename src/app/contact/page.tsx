"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "../_components/Button";

import SVGIconEmail from "../../assets/icon-email";
import SVGPhoneIcon from "../../assets/phone-icon";
import SVGSocialIcon from "../../assets/social-icon";
import SvgFacebookIcon from "../../assets/facebook-icon";
import SvgXIcon from "../../assets/x-icon";
import SVGInstagramIcon from "@/assets/instagram-icon";
import SvgLinkedInIcon from "@/assets/linkedin-icon";

import imageAbout from "../../../public/images/about_image.png";
import Image from "next/image";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleSendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    const templateParams = {
      from_name: firstName + " " + lastName,
      message: `${message}  My number is: ${phoneNumber}`,
      email: email,
    };

    emailjs
      .send(
        "service_3k4gqjj",
        "template_48hrmht",
        templateParams,
        "J9Fn34AfFlYgUf7R-"
      )
      .then(
        (response) => {
          console.log("Eail Enviado", response.status, response.text);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        },
        (error) => {
          console.log("Error ", error);
        }
      );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-1 bg-secondary w-full max-w-5xl rounded-xl mb-8">
        <div className="flex flex-col lg:flex-row py-10 gap-3 px-14 justify-between bg-primary rounded-tl-xl rounded-tr-xl">
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="font-bold text-title text-3xl">
              Let’s connect constellations
            </h1>
            <p className="font-normal text-text">
              LLorem ipsum dolor sit amet, consectetuer adipi scing elit, <br />{" "}
              sed diam nonummy
            </p>

            <form className="flex flex-col gap-2" onSubmit={handleSendEmail}>
              <div className="flex justify-between items-center gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                                        border-border_primary rounded text-text font-normal"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                                        border-border_primary rounded text-text font-normal"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                                    border-border_primary rounded text-text font-normal"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                placeholder="Pone Number"
                className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                                    border-border_primary rounded text-text font-normal"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <textarea
                placeholder="Message"
                name="message"
                rows={3}
                cols={30}
                className=" flex justify-center w-full p-2 bg-transparent border-2 
                                    border-border_primary rounded text-text font-normal"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>

              <button className="w-full rounded-full p-1 bg-button text-white">
                Send
              </button>
            </form>
          </div>

          <div>
            <div className="hidden lg:flex justify-center">
              <Image
                src={imageAbout}
                width={415}
                height={48}
                alt="image describing about"
              />
            </div>
            <div className="flex lg:hidden justify-center">
              <Image
                src={imageAbout}
                width={915}
                height={58}
                alt="image describing about"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 py-12 justify-around">
          <div className="flex flex-col justify-center items-center gap-3">
            <Button
              background="bg-button"
              px="px-3"
              py="py-3"
              height="h-16"
              width="w-16"
            >
              <SVGIconEmail />
            </Button>
            <span className="font-bold text-3xl text-title">Email</span>
            <span className="font-normal text-base text-text">
              contact@carmy.com
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <Button
              background="bg-button"
              px="px-3"
              py="py-3"
              height="h-16"
              width="w-16"
            >
              <SVGPhoneIcon />
            </Button>
            <span className="font-bold text-3xl text-title">Phone</span>
            <span className="font-normal text-base text-text">
              7-843-672-431
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <Button
              background="bg-button"
              px="px-3"
              py="py-3"
              height="h-16"
              width="w-16"
            >
              <SVGSocialIcon />
            </Button>
            <span className="font-bold text-3xl text-title">Socials</span>
            <div className="flex items-center justify-between gap-3">
              <SvgFacebookIcon />
              <SvgXIcon />
              <SVGInstagramIcon />
              <SvgLinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
