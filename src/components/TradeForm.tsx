"use client";
import { formatToInr } from "@/utils";
import React, { useState } from "react";
import IntlTelInput, { IntlTelInputProps } from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const TradeForm = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (value: any) => {
    setPhoneNumber(value);
  };

  return (
      <div className="w-full max-w-md mx-auto border rounded-md p-2">
        <div className="flex border-b border-gray-300">
          <button
            className={`py-2 px-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === "buy" ? "text-green-500 border-b border-green-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === "sell" ? "text-green-500 border-b border-green-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("sell")}
          >
            Sell
          </button>
        </div>
        <div className="mt-4 mb-2 px-4">
          {activeTab === "buy" && (
            <form>
              <h2 className="text-lg font-semibold mb-4 text-black">Chennai Super Kings (CSK)</h2>
              <h2 className="text-md font-semibold mb-4 text-gray-500">{formatToInr(192)}</h2>
              {/* Your Buy Form Content */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
                />
                  <IntlTelInput
                    value={phoneNumber}
                    onPhoneNumberChange={handlePhoneChange}
                    telInputProps={{
                      name: "Buyer-Phone-7",
                      id: "Buyer-Phone-7",
                      required: true,
                      placeholder: "081234 56789",
                      autoComplete: "on",
                    } as IntlTelInputProps}
                    inputClassName="w-[100%] p-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:outline-none !text-black"
                  />
                <input
                  type="number"
                  placeholder="Quantity"
                  className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
                />
                <button className="p-3 bg-green-500 text-white rounded-full font-bold text-md">Buy</button>
                <button className="p-2 flex justify-center items-center border border-gray-300 hover:border-green-500 text-black rounded-full font-semibold text-md">
                    <img className="h-7" src={"https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"}/>
                    <span>Get Connected Now</span>
                </button>
              </div>
            </form>
          )}
          {activeTab === "sell" && (
         <form>
         <h2 className="text-lg font-semibold mb-4 text-black">Chennai Super Kings (CSK)</h2>
         <h2 className="text-md font-semibold mb-4 text-gray-500">* Best In Industry</h2>
         {/* Your Buy Form Content */}
         <div className="flex flex-col gap-3">
           <input
             type="text"
             placeholder="Name"
             className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
           />
           <input
             type="text"
             placeholder="Email"
             className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
           />
             <IntlTelInput
               value={phoneNumber}
              //  onChange={handlePhoneChange}
               telInputProps={{
                 name: "Buyer-Phone-7",
                 id: "Buyer-Phone-7",
                 required: true,
                 placeholder: "081234 56789",
                 autoComplete: "on",
               } as IntlTelInputProps}
               inputClassName="w-[100%] p-4 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:outline-none"
             />
           <input
             type="number"
             placeholder="Quantity"
             className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
           />
           <textarea
             placeholder="Message"
             rows={3}
             className="focus:ring-1 focus:ring-green-500 focus:outline-none w-full p-4 border border-gray-300 rounded-md"
           />
           <button className="p-3 bg-green-500 text-white rounded-full font-bold text-md">Sell</button>
           <button className="p-2 flex justify-center items-center border border-gray-300 hover:border-green-500 text-black rounded-full font-semibold text-md">
               <img className="h-7" src={"https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/678b78d87140ff853f2c831c_whatsapp-logo-webflow-cloneable-template-brix-templates.svg"}/>
               <span>Get Connected Now</span>
           </button>
         </div>
       </form>
          )}
        </div>
      </div>
  );
};

export default TradeForm;
