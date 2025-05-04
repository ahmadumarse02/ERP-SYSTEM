import LogisticsChart from "@/components/components/dashboard/Charts";
import { MemoTable } from "@/components/components/dashboard/MemoTable";
import { PaymentVoucherTable } from "@/components/components/dashboard/PaymentTable";
import StaffTable from "@/components/components/dashboard/StaffTable";
import Header from "@/components/layout/Header";
import { getLogisticsStats } from "@/server/logistics/cards";

export default async function DashboardPage() {
  const stats = await getLogisticsStats();

  return (
    <div className="">
      <Header
        title="Welcome, Mr. Otor John"
        description="Today is Saturday, 11th November 2022."
      />
      <div className="grid grid-cols-2 items-center gap-8">
        <MemoTable />
        <StaffTable />
        <PaymentVoucherTable />
        <LogisticsChart stats={stats} />
      </div>
    </div>
  );
}

export const dynamic = 'force-static'