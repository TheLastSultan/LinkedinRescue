"use client";

import { Navbar, Footer } from "@/components";
import type { CardProps } from "@material-tailwind/react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { blogPosts } from '../blog-data';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogIndexPage() {
  // Reset scroll position when page loads
  if (typeof window !== 'undefined') {
    // Using React.useEffect would be better, but this is a simpler approach
    // that works for this specific component
    window.scrollTo(0, 0);
  }
  
  return (
      <>
      <Navbar />
      
      {/* Blog Header */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-semibold text-blue-gray-900 mb-4">
              LinkedIn Account Recovery Blog
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert insights, legal strategies, and practical advice to help you recover your banned LinkedIn account
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Post */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <Image 
                  src={blogPosts[0].thumbnail} 
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-3">
              {blogPosts[0].tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-semibold px-2 py-1 rounded bg-blue-50 text-blue-500">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-blue-gray-900 mb-3">
              <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-blue-500 transition-colors">
                {blogPosts[0].title}
              </Link>
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {blogPosts[0].metaDescription}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-gray-100 flex items-center justify-center text-blue-gray-500">
                {blogPosts[0].author.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-blue-gray-900 font-medium">
                  {blogPosts[0].author}
                </p>
                <p className="text-sm text-gray-600">
                  {blogPosts[0].date}
                </p>
              </div>
            </div>
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <button className="flex items-center gap-2 text-blue-500 font-medium">
                Read Full Article
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* All Blog Posts */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <h3 className="text-2xl font-semibold text-blue-gray-900 mb-8">
          All Articles
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, idx) => (
            <div key={idx} className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.thumbnail} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-semibold px-2 py-1 rounded bg-blue-50 text-blue-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h5 className="text-xl font-semibold text-blue-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-500 transition-colors">
                    {post.title}
                  </Link>
                </h5>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.metaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-gray-100 flex items-center justify-center text-blue-gray-500 text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <p className="text-sm text-gray-600">
                      {post.date}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="flex items-center gap-1 text-blue-500 text-sm font-medium">
                      Read
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-gray-900 mb-4">
                Need Help Recovering Your LinkedIn Account?
              </h3>
              <p className="text-gray-700 mb-6">
                Our team of legal experts has a 94% success rate in recovering banned LinkedIn accounts. 
                We leverage privacy laws like GDPR and CCPA to ensure your account is restored quickly.
              </p>
              <a href="https://buy.stripe.com/4gw01V4aqdAa3yUeUU" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all w-full">
                  Get Your Account Back Now
                </button>
              </a>
            </div>
            <div className="grid place-items-center">
              <div className="w-72 h-72 relative">
                <Image 
                  src="/image/image-8.png" 
                  alt="LinkedIn Account Recovery"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}