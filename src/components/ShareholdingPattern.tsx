"use client"
import React, { useEffect, useState } from "react";
import Table from "./Table";
import ApiFacade from "@/services/ApiFacade";

// const data = [
//   {
//     values: ["Trustees, India Cements Shareholders Trust", "30.06%", "30.03%", "21.47%", "36.22%"],
//   },
//   {
//     values: ["Sri Saradha Logistics Private Limited", "6.89%", "6.89%", "6.89%", "5.26%"],
//   },
//   {
//     values: ["Life Insurance Corporation Of India", "6.04%", "6.04%", "6.04%", "5.60%"],
//   },
//   {
//     values: ["Trustees", "-", "-", "1.76%", "4.90%"],
//   },
//   {
//     values: ["Others", "57.01%", "57.04%", "57.36%", "48.02%"],
//   },
// ];

const columns = ["Shareholding Pattern", "2021", "2022", "2023", "2024"];
const ShareholdingPattern = () => {
    const [data, setData] = useState([]);
  
    const getShareholdingData = async () => {
     try{
      const response:any = await ApiFacade.get("/api/excel/get/shareholding-pattern")
      const data = response.data.map(ele => Object.assign({}, {values:Object.values(ele)}))
      setData(data)
     }catch(e){console.log(e)}
    }
  
    useEffect(() => {
      getShareholdingData()
    },[])

  return <Table data={data} columns={columns} />;
};

export default ShareholdingPattern;
