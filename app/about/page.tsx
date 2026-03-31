import React from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const AboutPage = () => {
  return (
    <div>
      <ComingSoonBanner title="📖 About - Coming Soon" />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-gray-800">About Page</h1>
      </div>
    </div>
  );
};

export default AboutPage;