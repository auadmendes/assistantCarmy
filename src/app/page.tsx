"use client";

import { useRouter } from "next/navigation";


import mobile from "../../public/image/mobile.png";
import phone from "../../public/images/phone.png";
import Image from "next/image";
import HomepageImage from "../assets/home-header-image";

import {
  Apple,
  PlayIcon,
  Mails,
  Users2,
  ChevronsLeftRight,
  PenLine,
  LayoutGrid,
  CircleArrowDown,
} from "lucide-react";

import { Button } from "./_components/Button";
import ActionArrowUpIcon from "@/assets/action-arrow-up-icon";
import AddIcon from "@/assets/add-icon";

import backgroundHome from "../assets/back.svg"
import { useQuestionStore } from "@/store/home-question-store";




export default function HomePage() {
  const { question, setQuestion } = useQuestionStore();
  const router = useRouter();



  function handleNavigation() {
    if(question) {
      //message.error("Message: " + question);
      router.push("/mechanic");
    }
  }

  const encodeSVGtoBase64 = (svg: string | number | boolean) => {
    const encoded = encodeURIComponent(svg);
    return `data:image/svg+xml;utf8,${encoded}`;
  };

  return (
    <div className="w-full p-20 bg-primary">
    <div
      className="bg-button w-full rounded-2xl py-10 px-3"
      style={{
        backgroundImage: `url(${backgroundHome.src})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="absolute ml-72 mb-96">
          {/* <HomepageImage /> */}
        </div>

        <div className="text-center text-white max-w-md m-auto text-4xl font-bold ">
          <h1>Revolutionize Your Car Maintenance with AI</h1>
        </div>
        <div className="text-text text-center p-2">
          <h6>
            Diagnose issues, predict repair costs, and maintain your vehicle
            effortlessly
          </h6>
        </div>
        <div className="w-full ">
          <div className="flex bg-white w-full max-w-4xl px-4 py-2 rounded-xl mx-auto m-6">
            <div className="flex items-center w-full justify-center gap-3">
              <button>
                <AddIcon />
              </button>
              <input
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  placeholder="Type Your Question Here"
                  className="w-full border-none outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleNavigation();
                    }
                  }}
              />
            </div>
            <button onClick={handleNavigation}>
              <ActionArrowUpIcon />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-row  justify-center items-center gap-2 m-3 max-w-xl flex-wrap">
            <Button border="border-2" title="Battery" color="text-white" />
            <Button border="border-2" title="Alternator" color="text-white" />
            <Button
              border="border-2"
              title="Starter motor"
              color="text-white"
            />
            <Button border="border-2" title="Spark plugs" color="text-white" />
            <Button border="border-2" title="Fuel pump" color="text-white" />
            <Button border="border-2" title="Brakes" color="text-white" />
            <Button border="border-2" title="Transmission" color="text-white" />
            <Button border="border-2" title="Radiator" color="text-white" />
            <Button border="border-2" title="Water pump" color="text-white" />
            <Button
              border="border-2"
              title="Oxygen sensor"
              color="text-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary w-full rounded-2xl py-3 px-3 mt-5">
        <div className="bg-primary w-full rounded-t-2xl flex flex-col justify-center items-center">
          <div className="text-center text-title text-2xl font-bold p-3 pt-10">
            <h1>Get our Free Mobile App</h1>
          </div>
          <div className="text-center text-text max-w-md text-xs ">
            <p>
              The soft glow of the afternoon sun filtered through the trees,
              casting dappled shadows on the winding path. A gentle breeze
              stirred the leaves, carrying with it the
            </p>
          </div>
          <div className=" flex gap-3 m-10">
            <div className="flex p-3 bg-button rounded justify-between items-center gap-2 text-white ">
              <Apple />
              <div className="flex flex-col leading-3">
                <span className="font-extralight text-xs">Download on the</span>
                <span className="text-xl font-normal">App Store</span>
              </div>
            </div>
            <div className="flex py-1 px-4 bg-button rounded justify-between items-center gap-2 text-white ">
              <PlayIcon />
              <div className="flex flex-col leading-3">
                <span className="font-extralight text-xs">Get it on</span>
                <span className="text-xl font-normal">Google Play</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 justify-center flex-wrap">
            <Image src={phone} width={795} height={384} alt="" />
          </div>
        </div>
        <div className="bg-secondary flex flex-row justify-center items-center gap-3 mt-5 mb-12 flex-wrap w-full">
          <div className="flex flex-col items-center">
            <div className="bg-button p-2 rounded-full mt-10 text-white">
              <Mails size={14} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-xl text-title p-2">
                Measure Your Performence
              </span>
              <span className="text-center w-56 text-xs text-text">
                a fleeting reminder that sometimes, the simplest things hold the
                greatest wonder.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-button p-2 rounded-full mt-10 text-white">
              <ChevronsLeftRight size={14} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-xl text-title p-2">
                Measure Your Performance
              </span>
              <span className="text-center w-56 text-xs text-text">
                a fleeting reminder that sometimes, the simplest things hold the
                greatest wonder.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-button p-2 rounded-full mt-10 text-white">
              <Users2 size={14} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-xl text-title p-2">
                Measure Your Performence
              </span>
              <span className="text-center w-56 text-xs text-text">
                a fleeting reminder that sometimes, the simplest things hold the
                greatest wonder.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-16 bg-primary flex-wrap rounded-b-2xl">
          <div className="flex justify-center flex-wrap gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-2xl text-title">
                Gain more insight into how people <br /> use your
              </h2>

              <span className="text-text text-xs">
                The soft glow of the afternoon sun filtered through the trees,
                <br />
                casting dappled shadows on the winding path. The soft glow
                <br /> of the afternoon sun filtered through the trees.
              </span>

              <div className="flex flex-row gap-4 mt-10">
                <div className="bg-button rounded-full w-8 h-8 flex items-center justify-center text-white">
                  <Mails size={18} />
                </div>
                <div>
                  <h2 className="mb-2 text-title">Measure Your Performance</h2>
                  <span className="text-xs font-light text-text line-clamp-4">
                    The soft glow of the afternoon sun filtered through <br />
                    the trees, casting dappled shadows on the winding
                    <br /> path.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-5">
                <div className="bg-button rounded-full w-8 h-8 flex items-center justify-center text-white">
                  <PenLine size={18} />
                </div>
                <div>
                  <h2 className="mb-2 text-title">Measure Your Performance</h2>
                  <span className="text-xs font-light text-text line-clamp-4">
                    The soft glow of the afternoon sun filtered through <br />
                    the trees, casting dappled shadows on the winding
                    <br /> path.
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 mt-5">
                <div className="bg-button rounded-full w-8 h-8 flex items-center justify-center text-white">
                  <LayoutGrid size={18} />
                </div>
                <div>
                  <h2 className="mb-2 text-title">Measure Your Performance</h2>
                  <span className="text-xs font-light text-text line-clamp-4">
                    The soft glow of the afternoon sun filtered through <br />
                    the trees, casting dappled shadows on the winding
                    <br /> path.
                  </span>
                </div>
              </div>
            </div>

            <Image
              className="rounded-xl"
              src={mobile}
              width={300}
              height={900}
              alt=""
              style={{ marginLeft: "70px" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary p-3 mt-3 rounded-2xl">
        <div className="p-5 flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-title p-5">
            We believe in the power of data
          </h1>
          <p className="text-text text-xs mb-20">
            The soft glow of the afternoon sun filtered through the trees,
            casting dappled shadows on the winding
          </p>
          <div className="flex flex-row justify-around items-center gap-16 flex-wrap">
            <div className="text-center">
              <h1 className="text-accent3 text-4xl font-bold">235.000</h1>
              <p className="text-text text-xs">projects completed</p>
            </div>

            <div className="text-center">
              <h1 className="text-accent3 text-4xl font-bold">$10m</h1>
              <p className="text-text text-xs">APR</p>
            </div>

            <div className="text-center">
              <h1 className="text-accent3 text-4xl font-bold">+50.000</h1>
              <p className="text-text text-xs">Hours Saved Annually</p>
            </div>

            <div className="text-center">
              <h1 className="text-accent3 text-4xl font-bold">3.500</h1>
              <p className="text-text text-xs">Unique Users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-8 ">
        <h1 className="text-3xl font-bold text-title m-5">
          Frequently Asked s
        </h1>
        <p className="text-text text-xs">
          The soft glow of the afternoon sun filtered through the trees, casting
          dappled shadows on the winding
        </p>

        <div className=" w-full flex flex-col justify-center items-center gap-5">
          <div className="bg-secondary p-8 flex flex-row justify-between text-title items-center w-2/4 rounded-xl">
            <h1>How long does it take to ship my order?</h1>
            <div className="text-gray-300 ">
              <CircleArrowDown size={16} />
            </div>
          </div>

          <div className="bg-secondary p-8 flex flex-row justify-between text-title items-center w-2/4 rounded-xl">
            <h1>How long does it take to ship my order?</h1>
            <div className="text-gray-300">
              <CircleArrowDown size={16} />
            </div>
          </div>

          <div className="bg-secondary p-8 flex flex-row justify-between text-title items-center w-2/4 rounded-xl">
            <h1>How long does it take to ship my order?</h1>
            <div className="text-gray-300">
              <CircleArrowDown size={16} />
            </div>
          </div>

          <div className="bg-secondary p-8 flex flex-row justify-between text-title items-center w-2/4 rounded-xl">
            <h1>How long does it take to ship my order?</h1>
            <div className="text-gray-300">
              <CircleArrowDown size={16} />
            </div>
          </div>

          <div className="bg-secondary p-8 flex flex-row justify-between text-title items-center w-2/4 rounded-xl">
            <h1>How long does it take to ship my order?</h1>
            <div className="text-gray-300">
              <CircleArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
