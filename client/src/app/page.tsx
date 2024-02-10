import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineSalesChart from "@/components/visualizations/LineSalesChart";
import HomeCardData from "@/components/visualizations/HomeCardData";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "@/components/tables/jobTableData";
import { jobColumn, JobColumnType } from "@/components/tables/jobColumn";
import HomeTable from "@/components/visualizations/HomeTable";
import HomeRadialBarChart from "@/components/visualizations/HomeRadialBarChart";

async function getJobData(): Promise<JobColumnType[]> {
  const response = await fetch("http://localhost:5000/api/v1/job", {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

export default async function Home() {
  const jobData = await getJobData();

  return (
    <main>
      <Tabs defaultValue="job">
        <Card className="w-fit mx-auto mt-2 mb-10">
          <TabsList>
            <TabsTrigger value="dash">Dashboard</TabsTrigger>
            <TabsTrigger value="job">Job Listing</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="dash">
          <HomeCardData />

          <div className="flex">
            <HomeRadialBarChart />
            <HomeTable />
          </div>
          
          <LineSalesChart />
        </TabsContent>

        <TabsContent value="job">
          <DataTable columns={jobColumn} data={jobData} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
