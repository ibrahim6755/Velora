import React from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const BlogPage = () => {
  return (
    <div>
      <ComingSoonBanner title="📝 Blog - Coming Soon" />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Blog Page</h1>
      </div>
    </div>
  );
};

export default BlogPage;