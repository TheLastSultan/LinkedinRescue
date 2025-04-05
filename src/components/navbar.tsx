"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";


export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 bg-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
      <Link href="/" passHref>
        <Image
            key="1"
            alt="Linkedin Rescue Service"
            width={480}
            height={480}
            src="/image/logo.svg"
            className="w-40 opacity-75"
          />
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://buy.stripe.com/4gw01V4aqdAa3yUeUU" target="_blank" rel="noopener noreferrer">
            <Button fullWidth color="blue" size="lg" className="mb-4">
                Get Your Account Back Now
            </Button>          
          </a>
        </div>
      
      </div>
    
    </MTNavbar>
  );
}

export default Navbar;
