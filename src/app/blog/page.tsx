"use client";

import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components";
import { blogPosts } from "./blog-data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import remarkGfm from 'remark-gfm';


export default function BlogPage() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPost, setCurrentPost] = useState(blogPosts[0]);

  useEffect(() => {
    // Find the current blog post based on pathname
    const slug = pathname.split('/').pop();
    const post = blogPosts.find(post => post.slug === slug) || blogPosts[0];
    setCurrentPost(post);

    // Handle scroll progress
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <Navbar />
      
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side content (2/3 width) */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-4xl font-semibold text-blue-gray-900 mb-4">
              {currentPost.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm text-gray-600">
                Published: {currentPost.date}
              </p>
              <div className="flex gap-2">
                {currentPost.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-12 text-base text-gray-800 space-y-6 leading-relaxed">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h2: ({ node, ...props }) => (
        <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-900" {...props} />
      ),
      h3: ({ node, ...props }) => (
        <h3 className="text-xl font-semibold mt-8 mb-3 text-blue-800" {...props} />
      ),
      p: ({ node, ...props }) => (
        <p className="mb-4" {...props} />
      ),
      ul: ({ node, ...props }) => (
        <ul className="list-disc pl-5 mb-4 space-y-0.25" {...props} />
      ),
      ol: ({ node, ...props }) => (
        <ol className="list-decimal pl-5 mb-4 space-y-0.25" {...props} />
      ),
      li: ({ node, children, ...props }) => (
        <li className="ml-4 list-item leading-normal text-gray-800" {...props}>
          {children}
        </li>
      ), 
      blockquote: ({ node, ...props }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6" {...props} />
      ),
      strong: ({ node, ...props }) => (
        <strong className="font-semibold text-gray-900" {...props} />
      ),
      a: ({ node, ...props }) => (
        <a className="text-blue-600 underline hover:text-blue-800" {...props} />
      ),
    }}
  >
    {Array.isArray(currentPost.content)
      ? currentPost.content.join('\n\n')
      : currentPost.content}
  </ReactMarkdown>
</div>
            
            {/* Author card */}
            <div className="mt-12 border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-full overflow-hidden relative">
                <Image
                  alt="Hannah Moore"
                  src="/image/HannahCharlie.jpg"
                  width={300}
                  height={300}
                  className="object-cover rounded-full"
                  priority
                />

                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-1 text-[#0077b5]">
                    Written by Hannah Moore
                  </h5>
                  <p className="text-sm mb-3 text-[#0077b5] font-medium">
                    Attorney at Law
                  </p>
                  <p className="text-gray-600">
                    Hannah is a a semi-retired attorney with over 15 years of experience specializing in digital rights and account recovery. 
                    When she&apos;s not helping clients recover their online accounts, she enjoys gardening, reading on the beach, 
                    traveling to historic European cities, and spending time with her son, Charlie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side (1/3 width) - Fixed CTA */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <div className="shadow-lg rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-blue-500 p-6">
                  <h5 className="text-xl font-semibold text-white">
                    Tired of getting Ignored?
                  </h5>
                </div>
                <div className="p-6 bg-white">
                  <p className="mb-4 text-gray-700">
                    Our team of legal experts has helped recover over 5,000 LinkedIn accounts with a 94% success rate.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Legal demand letters to LinkedIn</span>
                    </li>
                    <li className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">10-day guarantee or full refund</span>
                    </li>
                    <li className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">CCPA & GDPR compliance expertise</span>
                    </li>
                  </ul>

                  <a href="https://buy.stripe.com/4gw01V4aqdAa3yUeUU" target="_blank" rel="noopener noreferrer">
                    <button className="w-full py-3 px-6 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all mb-2">
                      Get Your Account Back Now
                    </button>
                  </a>
                  
                  <p className="text-sm text-center text-gray-500">
                    Secure payment via Stripe
                  </p>
                </div>
              </div>
              
              <Card className="mt-6">
                <CardBody>
                  <Typography variant="h6" color="blue-gray" className="mb-4">
                    Related Articles
                  </Typography>
                  <div className="space-y-4">
                    {blogPosts.filter(post => post.slug !== currentPost.slug).slice(0, 3).map((post, idx) => (
                      <Link href={`/blog/${post.slug}`} key={idx}>
                        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <div className="w-16 h-16 relative bg-gray-100 rounded">
                            {post.thumbnail && (
                              <Image 
                                src={post.thumbnail} 
                                alt={post.title} 
                                fill 
                                className="object-cover rounded"
                              />
                            )}
                          </div>
                          <Typography variant="small" className="font-medium">
                            {post.title}
                          </Typography>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}