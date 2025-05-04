import { PaymentVoucherTable } from "@/components/components/payment-voucher/paymentTable";
import { SearchHeader } from "@/components/components/payment-voucher/SearchHeader";
import Header from "@/components/layout/Header";

function page() {
  return (
    <>
      <Header title="Payment Voucher" description="Create account for a new staff" />
      <SearchHeader />
      <PaymentVoucherTable />
    </>
  );
}

export default page;
