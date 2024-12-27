import { Box } from "../_components/Box";
import Image from "next/image";

import imageAbout from '../../../public/images/about_image.png'
import CarmyLog from "@/assets/carmy-logo";
import LogoCarmy from '../../../public/logo/Logo.svg'
import { Button } from "../_components/Button";
import { UserButton } from "@clerk/nextjs";

export default function Settings() {
    return(
        <div className="flex justify-center  max-w-4xl gap-6 p-3">
          
                <div className="flex flex-col gap-6">
                    <Image src={LogoCarmy} width={234} height={67} alt="Logo Carmy"/>
                    <p className="text-text text-sm font-normal leading-6">
                        The soft glow of the afternoon sun 
                        filtered through the trees, <br/> casting The soft glow of the afternoon sun filtered through the <br/>
                        trees, casting
                    </p>
                    <div className="hidden lg:flex justify-center">
                        <Image src={imageAbout} width={415} height={48} alt="image describing about"/>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-1">
                    <div className="p-6 bg-primary rounded-2xl h-full">
                       <div className="flex flex-col gap-4">
                            <h3 className="font-thin text-md">
                                LET'S GET YOU STARTED 
                            </h3>
                            <h1 className="font-semibold text-title text-4xl">
                                Create an Account
                            </h1>
                       </div> 

                       <div>
                        <form action="" className="flex flex-col justify-center items-center gap-2 mt-8">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                            border-border_primary rounded-lg text-text font-normal"
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                            border-border_primary rounded-lg text-text font-normal"
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            className=" flex justify-center w-full p-2 h-10 bg-transparent border-2 
                            border-border_primary rounded-lg text-text font-normal"
                        />
                        <Button
                            background="bg-button"
                            color="text-white"
                            title="Get started"
                            py="py-4"
                            width="w-full"
                        />
                        <span className="mt-3 mb-3">
                            Or
                        </span>

                        <div>
                            <UserButton />
                        </div>

                        </form>
                       </div>

                    </div>
                </div>

       
        </div>
    )
}