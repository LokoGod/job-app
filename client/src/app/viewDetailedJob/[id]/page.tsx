import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex justify-center items-center h-full">
      <Card className="w-[500px]">
        <CardHeader className="flex justify-between">
          <CardTitle>{jobData.jobId}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <p>{jobData.device.model}</p>
            <p>{jobData.jobError}</p>
          </div>
          <div>
            <CardDescription>{jobData.jobDescription}</CardDescription>
            <p>{jobData.jobIncludedItems}</p>
            <p>{jobData.status}</p>
          </div>
        </CardContent>
        <Separator className="my-2" />

        <CardFooter className="">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <p>{jobData.customer.cusName}</p>
            <Separator orientation="vertical" />
            <p>{jobData.customer.phoneNum}</p>
            <Separator orientation="vertical" />
            <p>
              {jobData.customer.phoneNum2
                ? jobData.customer.phoneNum2
                : "There is no 2nd phone number"}
            </p>
            <Separator orientation="vertical" />
            <p>
              {jobData.customer.email
                ? jobData.customer.email
                : "There is no email"}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
