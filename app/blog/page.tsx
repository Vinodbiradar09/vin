"use client"
import { motion } from "framer-motion";
// import BlogPostCard from "@/components/BlogsPostCard";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="pt-20 py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Blog
          Coming Soon
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
            
            </motion.div>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-center text-gray-400">{}</p>
        )}
      </div>
    </div>
  );
}