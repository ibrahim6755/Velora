import React from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const ShopPage = () => {
  return (
    <div>
      <ComingSoonBanner title="🛍️ Shop - Coming Soon" />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Shop Page</h1>
      </div>
    </div>
  );
};

export default ShopPage;