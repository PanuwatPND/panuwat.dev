"use client";

const Footer = () => {
  return (
    <div className="py-6 mt-10 ">
      {/* border-t border-gray-200 bg-white/80 backdrop-blur-sm rounded-tl-xl rounded-tr-xl */}
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 break-words">
        © {new Date().getFullYear()} Panuwat Phetseekaew. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
