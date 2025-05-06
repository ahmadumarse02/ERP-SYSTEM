"use server";

import prisma from "@/lib/prisma";

import {
  paymentVoucherSchema,
  PaymentVoucherInput,
} from "@/types/payment-voucher/paymentVoucherSchema.ts";

export async function createPaymentVocture(data: PaymentVoucherInput) {
  const result = paymentVoucherSchema.safeParse(data);

  if (!result.success) {
    return {
      error: "Failed to create PaymentVocture",
      details: result.error.format(),
    };
  }

  try {
    await prisma.paymentVoucher.create({
      data: {
        subject: result.data.subject,
        preparedBy: result.data.preparedBy,
        Date: result.data.Date,
        sendTo: result.data.sendTo,
      },
    });
  } catch (error) {
    console.error("Error creating staff", error);
    return { error: "Failed to create PaymentVocture" };
  }
}

export async function getPaymentVoucher() {
  try {
    const vouchers = await prisma.paymentVoucher.findMany();
    return vouchers;
  } catch (error) {
    console.error("Error fetching payment vouchers", error);
    throw error;
  }
}
