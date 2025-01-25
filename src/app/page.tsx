import {
  PageTitle,
  TradeForm,
  Financial,
  FundamentalsTable,
  ShareholdingPattern,
  Faq,
  BlogSection,
} from "@/components";
import { LineChart } from "@/components/charts";
import PromoterManagement from "@/components/PromoterManagement";

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col overflow-y-auto font-[family-name:var(--font-geist-sans)]">
      <PageTitle>Chennai Super Kings (CSK)</PageTitle>

      <div className="w-full h-auto md:h-[90vh] flex flex-col md:flex-row mt-12 px-4 gap-4 md:px-20 md:gap-2">
        <div className="w-full h-full md:w-[70%]">
          <LineChart />
        </div>
        <div className="w-full h-full md:w-[30%]">
          <TradeForm />
        </div>
      </div>

      <div className="w-full mt-6 h-auto md:w-[70%] flex flex-col px-4 gap-4 md:px-24 md:gap-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-md md:text-lg text-black dark:text-white font-extrabold">About Share</h2>
          <p className="text-gray-700 dark:text-white text-sm md:text-[16px]">
            Chennai Super Kings (CSK) is an Indian professional cricket franchise based in Chennai, Tamil Nadu. The team
            competes in the Indian Premier League (IPL) and was one of the eight franchises incorporated when the league
            was established in 2008. The team plays its home matches at the M. A. Chidambaram Stadium and is owned by
            Chennai Super Kings Cricket.
          </p>

          <p className="text-gray-700 dark:text-white text-sm md:text-[16px]">
            The Super Kings is the joint-most successful IPL franchise, having won five IPL titles (along with Mumbai
            Indians). In the IPL, it has appeared in a 10 finals and qualified for the playoff stages 12 times, the most
            amongst the IPL teams. The franchise has also won the Champions League Twenty20 twice in 2010 and 2014. The
            team is currently captained by Ruturaj Gaikwad and coached by Stephen Fleming.
          </p>

          <p className="text-gray-700 dark:text-white text-sm md:text-[16px]">
            The Super Kings was suspended for two years from the IPL starting July 2015 due to the involvement of its
            owners in the 2013 IPL betting case. The frachise re-joined the IPL for the 2018 season and won the title in
            its comeback season. In January 2022, CSK became India&apos;s first unicorn sports enterprise. As of 2022,
            it was the second most valuable IPL franchise with a valuation of $1.15 billion.
          </p>
        </div>

        <div className="mt-8 flex-1 flex flex-col gap-6">
          <h2 className="text-md text-black dark:text-white md:text-lg font-extrabold">Fundamentals</h2>
          <FundamentalsTable />
        </div>

        <div className="mt-8 flex-1 flex flex-col gap-6">
          <h2 className="text-md text-black dark:text-white md:text-lg font-extrabold">
            Financials &nbsp; <span className="text-gray-400">(In Cr)</span>
          </h2>
          <Financial />
        </div>

        <div className="mt-8 flex-1 flex flex-col gap-6">
          <h2 className="text-md text-black dark:text-white md:text-lg font-extrabold">Shareholding Pattern</h2>
          <ShareholdingPattern />
        </div>

        <div className="mt-8 flex-1 flex flex-col gap-6">
          <h2 className="text-md text-black dark:text-white md:text-lg font-extrabold">Promoters or Management</h2>
          <PromoterManagement />
        </div>
      </div>

      <div className="w-full mt-6 h-auto flex flex-col px-4 gap-4 md:px-24 md:gap-2">
        <Faq />
      </div>

      <div className="w-full mt-6 h-auto flex flex-col px-4 gap-4 md:px-24 md:gap-2">
        <BlogSection />
      </div>
    </div>
  );
};

export default page;

import React from "react";
