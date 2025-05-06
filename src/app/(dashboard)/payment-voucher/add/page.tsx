import CreatePaymenyVoucher from "@/components/components/payment-voucher/CreatePaymentVoucher";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header
        title="Payment Voucher"
        description="Create account for a new staff"
      />
      <CreatePaymenyVoucher />
    </>
  );
}

export default page;
