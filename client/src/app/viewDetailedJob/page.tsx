import { toast } from "sonner";

async function getJobData(id: number) {
  const response = await fetch(`http://localhost:5000/api/v1/job/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    toast.error("Failed to fetch data");
  }
  return response.json();
}

export default function ViewDetailedJob() {

  return (
    <div>
      <h1>Hello, there!</h1>
    </div>
  );
}
