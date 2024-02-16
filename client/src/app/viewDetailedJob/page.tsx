import { toast } from "sonner";

async function getJobData() {
  const response = await fetch(`http://localhost:5000/api/v1/job/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    toast.error("Failed to fetch data");
  }
  return response.json();
}


export default function ViewDetailedJob() {
  const jobData = getJobData()

  return (
    <div>
      <h1>Below is the error</h1>
      <p></p>
    </div>
  );
}
