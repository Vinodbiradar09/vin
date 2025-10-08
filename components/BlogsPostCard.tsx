import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogPostCard({ title, excerpt, date, slug }: BlogPostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg border border-slate-800"
    >
      <h3 className="text-2xl font-semibold text-white mb-2">{}</h3>
      <p className="text-gray-400 mb-4">{}</p>
      <p className="text-gray-500 mb-4">{}</p>
      <motion.div whileHover={{ x: 5 }}>
        <Button variant="link" className="text-neon p-0">
          Read More →
        </Button>
      </motion.div>
    </motion.div>
  );
}