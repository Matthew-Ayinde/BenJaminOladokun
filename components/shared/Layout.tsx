import images from "@/public/images";
import Image from "next/image";
import React from "react";

const Layout = () => {
  return (
    <div className="h-screen w-full relative fixed">
      <Image
        src={images.portrait}
        alt="portrait"
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 256px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Layout;
