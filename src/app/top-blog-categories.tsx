"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { blogCategories } from "./blog/blog-data";
import {
  ShieldCheckIcon,
  ScaleIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

// Map icons to blog categories
const categoryIcons = [
  ShieldCheckIcon,    // Account Recovery
  ScaleIcon,          // Legal Perspective
  DocumentTextIcon,   // Privacy Laws
  UserGroupIcon,      // Legal Representation
  ExclamationTriangleIcon, // Prevention Guide
];

export function TopBlogCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-10 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Expert LinkedIn Recovery Insights
        </Typography>
        <Typography variant="lead" color="gray" className="max-w-3xl">
          Discover proven strategies and legal approaches to recover your LinkedIn account
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="blue"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-blue-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-80">
              EXPERT LEGAL GUIDANCE
            </Typography>
            <Typography variant="h4" className="mt-6" color="white">
              LinkedIn Account Recovery Resources
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-10 font-normal opacity-80"
            >
              Our comprehensive guides provide you with actionable steps to recover your LinkedIn account. 
              Learn how privacy laws like GDPR and CCPA can be leveraged to restore your professional profile.
            </Typography>
            <Link href="/blog/how-to-recover-your-linkedin-account-if-banned">
              <Button size="sm" color="white">
                Read Featured Article
              </Button>
            </Link>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {blogCategories.slice(0, 2).map((category, key) => (
            <Link href={category.link} key={key}>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex h-28">
                  <div className="w-1/3 relative bg-gray-100">
                    <Image
                      width={120}
                      height={112}
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardBody className="w-2/3 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {React.createElement(categoryIcons[key], {
                        className: "h-5 w-5 text-blue-500",
                      })}
                      <Typography variant="h6" color="blue-gray">
                        {category.title}
                      </Typography>
                    </div>
                    <Typography variant="small" color="gray">
                      {category.description}
                    </Typography>
                    <Typography 
                      variant="small" 
                      color="blue" 
                      className="mt-1 font-medium flex items-center gap-1"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Typography>
                  </CardBody>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {blogCategories.slice(2, 4).map((category, key) => (
            <Link href={category.link} key={key + 2}>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex h-28">
                  <div className="w-1/3 relative bg-gray-100">
                    <Image
                      width={120}
                      height={112}
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardBody className="w-2/3 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {React.createElement(categoryIcons[key + 2], {
                        className: "h-5 w-5 text-blue-500",
                      })}
                      <Typography variant="h6" color="blue-gray">
                        {category.title}
                      </Typography>
                    </div>
                    <Typography variant="small" color="gray">
                      {category.description}
                    </Typography>
                    <Typography 
                      variant="small" 
                      color="blue" 
                      className="mt-1 font-medium flex items-center gap-1"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Typography>
                  </CardBody>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBlogCategories;
