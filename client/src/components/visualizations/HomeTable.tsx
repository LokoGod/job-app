import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function getJobData() {
  const response = await fetch("http://localhost:5000/api/v1/job", {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

export default async function HomeTable() {
  const jobData = await getJobData();
  const latestJobs = jobData.slice(0, 3);
  return (
    <div>
      <Table className="w-fit w-[600px]">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        {latestJobs.map((job: any, id: number) => (
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">{job.jobId}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
}
