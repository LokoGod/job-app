"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import { RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import Link from "next/link";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { RxClock } from "react-icons/rx";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const updateStatus = (id: number) => {
  const res = console.log(id);
  return res;
};

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
      return <Badge>{row.getValue("status")}</Badge>;
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
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      const jobId: string = row.getValue("id");
      const jobStatus: string = row.getValue("status");

      // const router = useRouter()

      const handleDeleteJob = async () => {
        try {
          await axios.delete(`https://job-app-q299.onrender.com/api/v1/job/${jobId}`);
          toast.success("Job deleted successfully");
          window.location.reload();
        } catch (error) {
          console.error("Error deleting job:", error);
          toast.error("Error deleting job");
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <RxDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>Jobs</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Dialog>
                <DialogTrigger className="flex p-1 justify-between text-sm">
                  <RxClock className="mr-5 ml-0.5 mt-0.5" size={15} />
                  <p>Update job status</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="mb-5">Update Status</DialogTitle>
                    <DialogDescription>Current Status: {jobStatus}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link
                href={`viewDetailedJob/${jobId}`}
              >
                <DropdownMenuItem>
                  <FaRegEye className="mr-5" />
                  View job
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleDeleteJob}>
                <FaRegTrashAlt className="mr-5" />
                Delete job
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
