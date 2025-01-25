"use client";
import ApiFacade from "@/services/ApiFacade";
import Table from "./Table";
import React, { useEffect, useState } from "react";

const incomeColumns = ["P&L Statement", "2021", "2022", "2023", "2024"];
const balanceSheetColumns = ["Assets", "2021", "2022", "2023", "2024"];
const cashflowColumns = ["Cash-Flow Statement", "2021", "2022", "2023", "2024"];
const Financial = () => {
  const [activeTab, setActiveTab] = useState("income_statement");
  const [incomeStatement, setIncomeStatement] = useState([]);
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [cashFlow, setCashFlow] = useState([]);

  const getFinancialData = async (url, financialType:string) => {
   try{
    const response:any = await ApiFacade.get(url)
    const data = response.data.map(ele => Object.assign({}, {values:Object.values(ele)}))
    if(financialType === "INCOME_STATEMENT")  setIncomeStatement(data);
    if(financialType === "BALANCE_SHEET")  setBalanceSheet(data);
    if(financialType === "CASH_FLOW") setCashFlow(data)
   }catch(e){console.log(e)}
  }

  useEffect(() => {
    getFinancialData("/api/excel/get/financial/income-statement", "INCOME_STATEMENT")
    getFinancialData("/api/excel/get/financial/balance-sheet", "BALANCE_SHEET")
    getFinancialData("/api/excel/get/financial/cashflow-statement", "CASH_FLOW")
  },[])

  return (
    <div className="w-full">
      <div className="flex">
        <button
          className={`py-2 px-4 text-sm md:text-lg font-semibold transition-all duration-300 ${
            activeTab === "income_statement" ? "text-green-500 border-b border-green-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("income_statement")}
        >
          Income Statement
        </button>
        <button
          className={`py-2 px-4 text-sm md:text-lg font-semibold transition-all duration-300 ${
            activeTab === "balance_sheet" ? "text-green-500 border-b border-green-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("balance_sheet")}
        >
          Balance Sheet
        </button>

        <button
          className={`py-2 px-4 text-sm md:text-lg font-semibold transition-all duration-300 ${
            activeTab === "cash_flow" ? "text-green-500 border-b border-green-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("cash_flow")}
        >
          Cash Flow
        </button>
      </div>
      <div className="mt-4 mb-2 px-4">
        {activeTab === "income_statement" && <Table data={incomeStatement} columns={incomeColumns} />}
        {activeTab === "balance_sheet" && <Table data={balanceSheet} columns={balanceSheetColumns} />}
        {activeTab === "cash_flow" && <Table data={cashFlow} columns={cashflowColumns} />}
      </div>
    </div>
  );
};

export default Financial;
