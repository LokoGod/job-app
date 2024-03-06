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
import { TbMoodEmpty } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

type Params = {
  params: {
    id: string;
  };
};

export default async function ViewDetailedJob({ params: { id } }: Params) {
  async function getJobData() {
    const response = await fetch(`https://job-app-q299.onrender.com/api/v1/job/${id}`, {
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
      <Card className="w-[800px]">
        <CardHeader className="flex">
          <CardTitle>
            {jobData.jobId} <Badge>{jobData.status}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <p>{jobData.device.model}</p>
            <p>{jobData.jobError}</p>
          </div>
          <Separator className="my-4" />
          <div>
            <CardDescription>{jobData.jobDescription}</CardDescription>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 mt-10">
                <Label htmlFor="terms">Included Items:</Label>
                <p className="text-sm">{jobData.jobIncludedItems}</p>
              </div>
              <div className="flex items-center space-x-2 mt-10">
                <Label htmlFor="terms">Date:</Label>
                <p className="text-sm">{jobData.createdDate.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <Separator className="my-4" />

        <CardFooter className=" justify-evenly">
          <div className="flex h-5 items-center space-x-4 ">
            <p>{jobData.customer.cusName}</p>
            <Separator orientation="vertical" />
            <p>{jobData.customer.phoneNum}</p>
            <Separator orientation="vertical" />
            <p>
              {jobData.customer.phoneNum2 ? (
                jobData.customer.phoneNum2
              ) : (
                <TbMoodEmpty />
              )}
            </p>
            <Separator orientation="vertical" />
            <p>
              {jobData.customer.email ? (
                jobData.customer.email
              ) : (
                <TbMoodEmpty />
              )}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
