import React from "react";

type PageTitlePropsType = {
  children: React.ReactNode;
};

const PageTitle = (props: PageTitlePropsType) => {
  const { children } = props;
  return (
    <div className="h-48 text-center flex justify-center items-center bg-[#f9fbf9] dark:bg-gray-900 w-full">
      <h1 className="text-black tracking-tight dark:text-white text-4xl md:text-5xl font-bold leading-2">{children}</h1>
    </div>
  );
};

export default PageTitle;
