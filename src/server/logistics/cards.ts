"use server";

import prisma from "@/lib/prisma";

type LogisticsRequestStatus = 'PENDING' | 'APPROVED' | 'CANCELLED';
type ChartData = {
    name: "Pending" | "Approved" | "Cancelled";
    value: number;
};

export async function getLogisticsStats(): Promise<{
    total: number;
    data: ChartData[];
}> {
    try {
        const counts = await prisma.logisticsRequest.groupBy({
            by: ['status'],
            _count: { status: true },
            where: { status: { in: ['PENDING', 'APPROVED', 'CANCELLED'] } }
        });

        const stats = { PENDING: 0, APPROVED: 0, CANCELLED: 0 };
        counts.forEach(item => {
            stats[item.status as LogisticsRequestStatus] = item._count.status;
        });

        const total = stats.PENDING + stats.APPROVED + stats.CANCELLED;

        // Explicitly type the returned data
        const data: ChartData[] = [
            { name: "Pending", value: stats.PENDING },
            { name: "Approved", value: stats.APPROVED },
            { name: "Cancelled", value: stats.CANCELLED },
        ];

        return { total, data };
    } catch (error) {
        console.error("Failed to fetch logistics stats:", error);
        return {
            total: 0,
            data: [
                { name: "Pending", value: 0 },
                { name: "Approved", value: 0 },
                { name: "Cancelled", value: 0 },
            ],
        };
    }
}