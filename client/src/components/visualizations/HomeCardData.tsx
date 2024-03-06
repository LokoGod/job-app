import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { PiPulseDuotone } from "react-icons/pi";
import { HiOutlineWindow } from "react-icons/hi2";
import { TbUsers } from "react-icons/tb";
import { LuDollarSign } from "react-icons/lu";
import { toast } from "sonner";

async function getJobData() {
  const response = await fetch("https://job-app-q299.onrender.com/api/v1/job", {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    toast.error("Failed to fetch data");
  }
  return response.json();
}

const HomeCardData = async () => {
  const jobData = await getJobData();
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-5 mx-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
          <LuDollarSign />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>

          <div className="text-xs text-muted-foreground">
            <Badge variant={"customSuccessGreen"}>+20.1%</Badge> from last month
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Urgent Jobs</CardTitle>
          <TbUsers />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <div className="text-xs text-muted-foreground">
            <Badge variant={"customSuccessGreen"}>+180.1%</Badge> from last
            month
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Jobs</CardTitle>
          <HiOutlineWindow />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <div className="text-xs text-muted-foreground">
            <Badge variant={"destructive"}>-19%</Badge> from last month
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
          <PiPulseDuotone />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <div className="text-xs text-muted-foreground">
            <Badge variant={"customSuccessGreen"}>+201</Badge> since last hour
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeCardData;
