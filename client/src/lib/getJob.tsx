export default async function getJob(id: string) {
  const response = await fetch(`http://localhost:5000/api/v1/job/${id}`);
  if (!response.ok) throw new Error("Failed to fetch job");

  return response.json();
}
