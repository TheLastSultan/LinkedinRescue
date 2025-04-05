"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Get your Linkedin Unrestricted in 10 days.<br /> Or your money back.
          </Typography>
          <Typography
            variant="h6"  // Adjust based on the size you prefer
            className="font-bold text-black text-[#0077b5] mb-4"
          >
            Hannah Moore, Attorney at Law - Specializing in Consumer Protection
          </Typography>

          <Typography
            variant="body"  // Smaller text variant
            className="text-black md:pr-16 xl:pr-28"
          >
          As a dedicated attorney specializing in consumer protection, I file the necessary legal actions to ensure the prompt recovery of your LinkedIn account. I guarantee the restoration of access within 10 days, and in many cases, within 24 hours.
          </Typography>
          <div className="grid">  
          </div>
          
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-8.png"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
