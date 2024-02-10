"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { DatePickerDemo } from "../../DatePicker";

const formSchema = z.object({
  income_title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  income_amount: z.coerce.number().gte(10, {
    message: "Amount must be at least 2 digits.",
  }),
  income_category: z.string({
    required_error: "Please select a category!",
  }),
  recurring: z.boolean().default(false).optional(),
  receving_date: z.date().optional(),
});

export function AddIncomeForm() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      income_title: "",
      income_category: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>, event: any) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/income",
        values
      );
      console.log(response);
    } catch (error) {
      console.error("Create req failed", error);
    }
    console.log(values);
  }

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardDescription>
            Enter the details of the recieved income
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="">
                <FormField
                  control={form.control}
                  name="income_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Shoping discount surplus"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Explain the income breifly.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="income_amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Rs."
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Add the amount
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="income_category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Light">Light</SelectItem>
                            <SelectItem value="Dark">Dark</SelectItem>
                            <SelectItem value="System">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Categorize the income source
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="">
                <FormField
                  control={form.control}
                  name="recurring"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reccuring ?</FormLabel>
                      <FormControl className="flex">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>
                        Tick if the income will keep happening
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="">
                <FormField
                  control={form.control}
                  name="receving_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Set future date ?</FormLabel>
                      <FormControl className="flex">
                        <div>
                          <DatePickerDemo field={field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Add</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}