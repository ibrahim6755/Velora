import React from "react";
import { AlertCircle } from "lucide-react";

interface ComingSoonBannerProps {
  title?: string;
}

const ComingSoonBanner: React.FC<ComingSoonBannerProps> = ({
  title = "Coming Soon",
}) => {
  return (
    <div className="bg-gradient-to-r from-custom-red via-red-500 to-custom-red text-white py-4 px-4 md:px-6 flex items-center justify-center gap-3 w-full">
      <AlertCircle size={20} className="flex-shrink-0" />
      <span className="text-center font-semibold text-sm md:text-base">
        {title}
      </span>
    </div>
  );
};

export default ComingSoonBanner;
