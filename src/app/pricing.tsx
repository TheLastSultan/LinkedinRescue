"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

export function Pricing() {
  return (
    <section className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="lead" color="gray" className="mx-auto max-w-3xl">
            Get your LinkedIn account back with our proven recovery service
          </Typography>
        </div>
        
        <div className="flex justify-center">
          <Card className="w-full max-w-xl shadow-lg">
            <CardBody className="p-8">
              <div className="text-center mb-8">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Account Recovery Package
                </Typography>
                <Typography variant="h2" className="text-blue-500 font-bold">
                  $299
                </Typography>
                <Typography variant="small" color="gray" className="mb-4">
                  One-time payment
                </Typography>
              </div>
              
              <div className="mb-8">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  What&apos;s included:
                </Typography>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Typography color="gray">Legal filing of demand letters to LinkedIn on your behalf</Typography>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Typography color="gray">Cross-filing with legal bodies such as CCPA and GDPR (depending on your region) to accelerate your case.</Typography>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Typography color="gray">Thorough examination of potential damages</Typography>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Typography color="gray">Full refund if your account isn&apos;t recovered within 10 days</Typography>
                  </li>
                </ul>
              </div>
              
              <a href="https://buy.stripe.com/4gw01V4aqdAa3yUeUU" target="_blank" rel="noopener noreferrer">
                <Button fullWidth color="blue" size="lg" className="mb-4">
                  Get Your Account Back Now
                </Button>
              </a>
              
              <Typography variant="small" color="gray" className="text-center">
                Secure payment via Stripe. No hidden fees.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Pricing;