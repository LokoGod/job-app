import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Params = {
  params: {
    id: string;
  };
};

export default async function ViewDetailedJob({ params: { id } }: Params) {
  async function getJobData() {
    const response = await fetch(`http://localhost:5000/api/v1/job/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      toast.error("Failed to fetch data");
    }
    const jobData = await response.json();
    return jobData;
  }

  const jobData = await getJobData();

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between">
          <CardTitle>{jobData.jobId}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <p>{jobData.jobError}</p>
            <p>{jobData.status}</p>
          </div>
          <div>
            <p>{jobData.device.model}</p>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <h1>Hello, there viewers!</h1>
      <h2>jobError: {jobData.jobError}</h2>
    </div>
  );
}
