export async function GET(request: Request, response: Response) {
  const res = await fetch(`http://localhost:5000/api/v1/job/`);

  const data = await res.json()

  return Response.json(data)
}
