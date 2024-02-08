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

const HomeCardData = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-5 mx-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
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
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
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
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
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
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
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
