"use client";

import usersGlobalStore from "@/store/users-store";
import { Box } from "../_components/Box";
import Image from "next/image";

import imageAbout from "../../../public/images/about_image.png";

export default function About() {
  const { loggedInUserData }: any = usersGlobalStore();
  const user = loggedInUserData;

  return (
    <Box>
      <div className="flex flex-col w-full max-w-7xl h-full rounded-xl lg:gap-4 p-5">
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <Image
            src={imageAbout}
            width={500}
            height={260}
            alt="image describing about"
          />

          <div className="flex flex-col gap-3">
            <h2 className="flex-wrap font-bold text-title text-2xl">
              We are changing car diagnostics <br /> and maintenance forever!
            </h2>

            <span className="text-text text-lg font-bold">
              Our innovative App with the AI powers will help you fix,
              <br />
              troubleshoot and understand your car no matter how little you know
              <br />
              about cars.
            </span>

            <div className="flex flex-col">
              <p className="text-text text-base font-normal">
                It is also designed to help car owners be more efficient by
                saving money and time
              </p>

              <p className="text-text text-base font-normal">
                Get fast and precise evaluations of the car's condition and be
                your won mechanic!
              </p>

              {/* <p className="text-text text-base font-normal">
                seemed to slow in this quiet corner of the forest, where time
                felt like an afterthought. this quiet corner of the fores.
              </p> */}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          <p className="text-text text-base font-normal">
            The soft glow of the afternoon sun filtered through the trees,
            casting dappled shadows on the winding path. A gentle breeze stirred
            the leaves, carrying with it the and the earthy scent of pine. is
            quiet corner of the forest, where time felt like an afterthought.
          </p>

          <ul className="text-text text-base font-normal">
            <li>afterthought. this quiet corner of the forest.</li>
            <li>
              The soft glow of the afternoon sun filtered through the trees.
            </li>
            <li>A gentle breeze rustled the leaves above.</li>
          </ul>

          <p className="text-text text-base font-normal">
            The soft glow of the afternoon sun filtered through the trees,
            casting dappled shadows on the winding path. A gentle breeze stirred
            the leaves, carrying with it the and the earthy scent of pine. The
            world seemed to slow in this quiet corner of the forest, where time
            felt like an afterthought.seemed to slow in this quiet corner of the
            fores.
          </p>
        </div> */}
      </div>
    </Box>
  );
}
