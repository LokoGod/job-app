import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, response: Response) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  const res = await fetch(`http://localhost:5000/api/v1/job/${id}`);

  const data = await res.json()

  return Response.json(data)
}
