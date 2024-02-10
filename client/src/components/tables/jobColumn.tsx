"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type JobColumnType = {
  jobId: string;
  jobError: string;
  price: number;
  description: string;
  categoryId: number;
  category: string;
};

// Defining the clolumns
export const jobColumn: ColumnDef<JobColumnType>[] = [
  {
    accessorKey: "jobId",

    header: ({ column }) => {
      return <div>JOB-Number</div>;
    },
    cell: ({ row }) => {
      return (
        <a href="#" className="font-semibold hover:underline">
          {row.getValue("jobId")}
        </a>
      );
    },
  },
  {
    accessorKey: "jobError",

    header: ({ column }) => {
      return <div>Error</div>;
    },
    cell: ({ row }) => {
      return <div>{row.getValue("jobError")}</div>;
    },
  },
  {
    accessorKey: "device.model",
    header: "Device",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <LuArrowUpDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
       
          <Badge>{row.getValue("status")}</Badge>
       
      );
    },
  },
  {
    accessorKey: "customer.cusName",
    header: "Customer",
  },
  {
    accessorKey: "customer.phoneNum",
    header: "Phone-Num",
  },
  {
    accessorKey: "createdDate",
    header: () => <div>Received Date</div>,
    cell: ({ row }) => {
      const date: string = row.getValue("createdDate");
      const formatted = date.slice(0, 10);
      return <div className="font-semibold">{formatted}</div>;
    },
  },
  // {
  //   // formated the amount cell to display the dollar amount, also aligned the cell to the right.
  //   accessorKey: "price",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("price"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "LKR",
  //     }).format(amount);
  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  {
    // Added dropdown menu to rows
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <RxDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
