"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type AppLayoutPropsType = {
  children: React.ReactNode;
};

const AppLayout = (props: AppLayoutPropsType) => {
  const { children } = props;

  return (
    <>
      <div className="">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <button className="sticky  bottom-2 left-[100%] mr-14 shadow-lg top-96 z-50 p-3 md:p-4 flex justify-center items-center gap-2 text-white bg-green-500 rounded-full font-semibold text-sm md:text-md">
          <img
            className="h-7"
            src={
              "https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"
            }
          />
          <span>Chat on Whatsapp</span>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
