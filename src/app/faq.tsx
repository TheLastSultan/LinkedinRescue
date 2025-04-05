"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "How does the process work?",
    desc: "The process is simple. You submit your information and payment through Stripe. This includes important details such as where you reside, so we can cross-file your case with the appropriate governing authorities (e.g., CCPA for U.S. residents, GDPR for those in Europe). No matter the reason for your LinkedIn account being banned or deleted, we’ll work to recover it within 10 days — often sooner.",
  },
  {
    title: "What happens if my account isn't recovered?",
    desc: "If we don’t successfully recover your account within the guaranteed timeframe, we offer a full refund. You are protected by Stripe, which means if we fail to fulfill the service, you can file a dispute directly with your credit card company for a chargeback.",
  },
  {
    title: "What is your success rate?",
    desc: "We have a success rate of approximately 94%. LinkedIn tends to take action more seriously when they see a lawyer involved, which is why our approach is highly effective.",
  },
  {
    title: "Do you file on behalf of non-American applicants?",
    desc: "Absolutely! We serve clients from the USA, Canada, and Europe. These regions have strong protections in place, such as the GDPR in Europe and CCPA in California, ensuring your rights are respected.",
  },
  {
    title: "Do you engage in long-term lawsuits if LinkedIn doesn't release the account?",
    desc: "No, we do not pursue long-term lawsuits. In the rare event that we are unable to recover your account, you will receive a full refund, and we can help point you in the right direction for further action if necessary.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
        {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal black"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
