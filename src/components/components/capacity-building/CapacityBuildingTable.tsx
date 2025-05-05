import { getAllCapacityBuilding } from "@/server/capacity-building/getAllCapacityBuilding";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function CapacityBuildingTable() {
  const capacityBuildingData = await getAllCapacityBuilding();

  return (
    <div className="h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Capacity Building Trainings</h1>
      <Table>
        <TableCaption>A list of all training programs.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "Description",
              "Type",
              "Mode",
              "Duration",
              "Training Date",
              "Status",
              "Staff IDs",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {capacityBuildingData.map((training, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="max-w-[300px] truncate">{training.description}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {training.type.replace("-", " ")}
                </Badge>
              </TableCell>
              <TableCell className="capitalize">{training.mode.replace("-", " ")}</TableCell>
              <TableCell className="capitalize">{training.duration.replace("-", " ")}</TableCell>
              <TableCell>{training.trainingDate.toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    training.status === "COMPLETED"
                      ? "default"
                      : training.status === "IN_PROGRESS"
                        ? "secondary"
                        : training.status === "CANCELLED"
                          ? "destructive"
                          : "outline"
                  }
                  className={
                    training.status === "COMPLETED"
                      ? "bg-green-100 text-green-800"
                      : training.status === "IN_PROGRESS"
                        ? "bg-blue-100 text-blue-800"
                        : training.status === "CANCELLED"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                  }
                >
                  {training.status ? training.status.replace("_", " ") : ""}
                </Badge>
              </TableCell>
              <TableCell className="max-w-[150px] truncate">{training.staffIds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const revalidate = 0;