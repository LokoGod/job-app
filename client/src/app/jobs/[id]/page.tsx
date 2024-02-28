import { toast } from "sonner";

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
    return jobData.job;
  }

  const jobData = await getJobData();

  return (
    <div>
      <h1>Hello, there viewers!</h1>
      <h2>jobError: {jobData.jobError}</h2>
    </div>
  );
}