"use client"
import React from "react";

// Define the types for each member
interface Member {
  name: string;
  designation: string;
  experience: string;
  linkedin: string;
}

// Define the data with the type
const members: Member[] = [
  {
    name: "N. Srinivasan",
    designation: "Chairman",
    experience: "30 yrs",
    linkedin: "https://www.linkedin.com/in/n-srinivasan-8142763a/",
  },
];

// Define the headers based on the Member type
const headers = Object.keys(members[0]) as (keyof Member)[];

const PromoterManagement: React.FC = () => {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg">
      {/* Table header */}
      <div className="grid grid-cols-4 gap-4 border-b px-2 md:px-4 py-4 text-xs md:text-[16px] text-left text-gray-400 font-semibold">
        {headers.map((header, index) => (
          <div key={index} className="capitalize">
            {header.replace(/([A-Z])/g, " $1")}
          </div>
        ))}
      </div>

      {/* Table rows */}
      {members.map((member, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200">
          {headers.map((header, idx) =>
            header === "linkedin" ? (
              <a key={idx} href={member[header]} className="flex justify-center items-center">
                <img
                  src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66db4271e6eed217b0c84cd3_linkedin-original.png.svg"
                  alt="LinkedIn"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </a>
            ) : (
              <div key={idx} className="text-gray-800 dark:text-gray-500 text-start text-xs md:text-md">
                {member[header]}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default PromoterManagement;
