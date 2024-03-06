import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

async function getJobData() {
  const response = await fetch("https://job-app-q299.onrender.com/api/v1/job", {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

export default async function HomeTable() {
  const jobData = (await getJobData()).reverse();
  const latestJobs = jobData.slice(0, 3);
  return (
    <Table>
      <TableCaption>A list of your recent Jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">JOB-No</TableHead>
          {/* <TableHead>Status</TableHead> */}
          <TableHead>Error</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="text-right">Phone</TableHead>
        </TableRow>
      </TableHeader>
      {latestJobs.map((job: any, id: number) => (
        <TableBody key={id}>
          <TableRow>
            <TableCell className="font-medium">{job.jobId}</TableCell>
            {/* <TableCell></TableCell> */}
            <TableCell>{job.jobError}</TableCell>
            <TableCell>{job.device.model}</TableCell>
            <TableCell>{job.customer.cusName}</TableCell>
            <TableCell className="text-right">
              {job.customer.phoneNum}
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
}
