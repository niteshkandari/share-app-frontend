"use client";
import ApiFacade from "@/services/ApiFacade";
import { formatToInr } from "@/utils";
import React, { useEffect, useState } from "react";

interface RecordFundamentals {
  id: string;
  panNumber: string;
  isinNumber: string;
  cin: string;
  rta: string;
  depository: string;
  marketCap: number;
  shareValue: number;
  lotSize: number;
  totalShares: number;
  bookValue: number;
  faceValue: number;
  pbRatio: number;
  peRatio: number;
  roe: number;
  debtToEquity: string;
  valuation: string;
  weekHigh: number;
  weekLow: number;
  createdAt: string;
  createdBy: string;
}


const FundamentalsTable = () => {
  const [data, setData] = useState<RecordFundamentals | any>({});
  const [loading, setLoading] = useState(true);

  const fundamentalDataMain = [
    { label: "Chennai Super Kings (CSK)", value: data?.shareValue ? formatToInr(data?.shareValue) : "-" },
    { label: "Lot Size", value: data.lotSize || "-" },
    { label: "52 Week High", value: data?.weekHigh ? formatToInr(data?.weekHigh) : "-" },
    { label: "52 Week Low", value: data?.weekLow ? formatToInr(data?.weekLow) : "-" },
    { label: "Depository", value: data.depository || "-" },
    { label: "PAN Number", value: data.panNumber || "-" },
    { label: "ISIN Number", value: data.isinNumber || "-" },
    { label: "CIN", value: data.cin || "-" },
    { label: "RTA", value: data.rta || "-" },
  ];

  const fundamentalDataSub = [
    { label: "Market Cap (in cr)", value: data?.marketCap ? formatToInr(data?.marketCap) : "-" },
    { label: "P/E Ratio", value: data.peRatio || "-" },
    { label: "P/B Ratio", value: data.pbRatio || "-" },
    { label: "Debt to Equity", value: data.debtToEquity || "-" },
    { label: "ROE (%)", value: data.roe || "-" },
    { label: "Book Value", value: data.bookValue || "-" },
    { label: "Face Value", value: data.faceValue || "-" },
    { label: "Valuation", value: data.valuation || "-" },
    { label: "Total Shares", value: data.totalShares || "-" },
  ];

  const getFundamental = async () => {
    try {
      const response: any = await ApiFacade.get("/api/excel/get/fundamental");
      setData({ ...response.data });
      setLoading(false); // Set loading to false when data is fetched
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFundamental();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 md:space-x-5">
        <>
          <div className="grid grid-cols-2 gap-10">
            {fundamentalDataMain.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-gray-500 dark:text-white md:text-gray-900 text-xs md:text-[16px] font-semibold">
                  {item.label}
                </div>
                <div className="text-gray-900 dark:text-white text-end md:text-start text-xs md:text-[16px] font-semibold">
                  {loading ? <div className="w-12 rounded-md h-full bg-gray-200 animate-pulse"/> : item.value}
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10">
            {fundamentalDataSub.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-gray-500 dark:text-white md:text-gray-900 text-xs md:text-[16px] font-semibold">
                  {item.label}
                </div>
                <div className="text-gray-900 dark:text-white text-end md:text-start text-xs md:text-[16px] font-semibold">
                {loading ? <div className="w-12 rounded-md h-full bg-gray-200 animate-pulse"/> : item.value}
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
    </div>
  );
};

export default FundamentalsTable;
