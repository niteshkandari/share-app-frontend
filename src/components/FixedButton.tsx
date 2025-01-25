import Image from "next/image";
import React from "react";

const FixedButton = () => {
  return (
    <div className="sticky bottom-2 flex justify-end dark:bg-gray-900  bg-transparent w-full">
      <button className="mr-14 shadow-lg top-96 z-50 p-3 md:p-4 flex justify-center items-center gap-2 text-white bg-green-500 rounded-full font-semibold text-sm md:text-md">
        <Image
          className="h-7"
          width={'28'}
          height={'6'}
          src={
            "https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"
          }
          alt={""}
        />
        <span>Chat on Whatsapp</span>
      </button>
    </div>
  );
};

export default FixedButton;
