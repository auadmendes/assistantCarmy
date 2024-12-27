import CarmyFooterIcon from "@/assets/carmy-footer-icon";

import { Copyright, PhoneCall } from "lucide-react";

import SvgFacebookIcon from "@/assets/facebook-icon";
import SvgXIcon from "@/assets/x-icon";
import SVGInstagramIcon from "@/assets/instagram-icon";
import SvgLinkedInIcon from "@/assets/linkedin-icon";

// import React from "react";

export default function Footer() {
  return (
    <div className="bg-secondary p-10 flex justify-center gap-16 flex-wrap ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <CarmyFooterIcon />
          <h2 className="text-title">Carmy</h2>
        </div>

        <p className="text-xs  text-text font-normal">
          Sed ut perspiciatis undmnis is iste
          <br /> natus error sit amet voluptatem <br /> totam rem aperiam.
        </p>
        <div className="flex gap-2">
          <PhoneCall className="text-button" />
          <p className="text-text">+012 (345) 678 99</p>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <h2 className="text-title">Resources</h2>
        <div className="text-text text-xs">
          <p className="text-button">Saas Development</p>
          <p>Our Products</p>
          <p>Our Products</p>
          <p>User Strategy</p>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <h4 className="text-title">Company</h4>
        <div className="text-text text-xs">
          <p>About Landio</p>
          <p>Contact & Support</p>
          <p>Success History</p>
          <p>Setting & Privacy</p>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <h4 className="text-title">Quick Links</h4>
        <div className="text-text text-xs">
          <p>Premium Support</p>
          <p>Our Services</p>
          <p>Know Our Team</p>
          <p>Download App</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h4 className="text-title">Follow Us On</h4>
          <div className="flex items-center text-primary">
            <div className="border border-primary rounded-full p-0.5 text-primary bg-white">
              <SvgFacebookIcon />
            </div>
            <div>
              <SvgXIcon />
            </div>
            <div>
              <SVGInstagramIcon />
            </div>
            <div>
              <SvgLinkedInIcon />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-11">
            <Copyright className="text-text size-4" />
            <span className="text-xs text-text ">2024 carmy AB</span>
          </div>
        </div>
      </div>
      {/* <div className="border-t-2 border-border2 my-2"></div> */}
    </div>
  );
}
