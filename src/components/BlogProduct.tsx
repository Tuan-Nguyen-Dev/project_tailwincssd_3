import { ArrowRight } from "lucide-react";
import React from "react";
import BlogCard from "./BlogCard";
const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1618221770758-01929bf5ed39?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "7 ways to decorate your home",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618221770758-01929bf5ed39?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kitchen organization",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618221770758-01929bf5ed39?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Decor your bedroom",
    link: "#",
  },
];
const BlogProduct = () => {
  return (
    <div className="container mx-auto px-3 lg:px-5 py-5">
      <div className="flex items-center justify-between gap-5 py-5">
        <h3 className="text-2xl md:text-4xl font-display font-medium">
          Arrivals
        </h3>
        <div className="flex items-center border-b">
          <button className="cursor-pointer">More Product</button>
          <ArrowRight size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogProduct;
