import { StocksCard } from "@/components/components/stocks-and-inventory/Header";
import { StatsOverview } from "@/components/components/stocks-and-inventory/StatsOverview";
import StockTable from "@/components/components/stocks-and-inventory/StockTable";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Stocks and Inventory" description="Update stoke and inventory table" />
      <StatsOverview />
      <StocksCard />
      <StockTable />
    </>
  );
}

export default page;
