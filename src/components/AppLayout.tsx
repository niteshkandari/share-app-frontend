"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FixedButton from "./FixedButton";

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
        <FixedButton/>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
