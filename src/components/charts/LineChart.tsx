"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import Image from "next/image";
import { formatToInr } from "@/utils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  // Updated data for share prices
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Share Price",
        data: [150, 170, 180, 190, 200, 210, 220, 230, 240, 250, 192, 180], // Values reflecting high (250), low (150), and average price
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options: ChartOptions | any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
        ticks: {
          callback: (value: number) => `${Math.round(value)}`,
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="relative w-28 h-28">
          <Image
            src={
              "https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1)-p-500.jpg"
            }
            alt="Dynamic share Image"
            fill
            className="object-fill"
            priority
          />
        </div>
        <h1 className="text-lg md:text-xl text-black font-bold">Chennai Super Kings (CSK)</h1>
        <div className="flex justify-start items-center gap-4">
          <span className="text-md md:text-lg dark:text-white text-black font-bold">{formatToInr(192)}</span>
          <span className="text-sm md:text-md font-semibold dark:text-white text-gray-600">{formatToInr(58)}</span>
          <span className="text-sm md:text-md font-semibold dark:text-white text-gray-600">21.11%</span>
          <span className="text-sm md:text-md font-semibold dark:text-white text-gray-600">(1Y)</span>
        </div>
        <div className="w-full md:w-[90%] h-[400px] md:h-[500px] dark:bg-white rounded-md">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
