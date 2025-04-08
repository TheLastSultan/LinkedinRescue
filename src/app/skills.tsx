"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "1. Submit Your Information",
    children:
      "Provide the necessary details about your LinkedIn account, and submit your payment securely.",
  },
  {
    icon: FingerPrintIcon,
    title: "2. Personalized Action and Legal Filing",
    children:
      "I will tailor your recovery request and initiate legal action against LinkedIn within one business day to ensure the fastest resolution.",
  },
  {
    icon: SwatchIcon,
    title: "3. Account Recovery in 10 Days",
    children:
      "Your LinkedIn account will be fully restored within 10 days, guaranteed. In the majority of cases it is restored within 24 hours.",
  }
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-8 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          How it Works:
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
