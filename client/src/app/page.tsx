import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LineSalesChart from "@/components/visualizations/LineSalesChart";
import HomeCardData from "@/components/visualizations/HomeCardData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <Tabs defaultValue="dash">
        <Card className="w-fit mx-auto my-2">
          <TabsList>
            <TabsTrigger value="dash">Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="dash">
          <HomeCardData />

          <LineSalesChart />
        </TabsContent>

        <TabsContent value="analytics">
          <h1>Hello, there!</h1>
        </TabsContent>
      </Tabs>
    </main>
  );
}
