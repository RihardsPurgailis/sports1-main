"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventDefaultValues } from "@/constants"
import { eventFormSchema } from "@/lib/validator"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Date } from "mongoose"



type EventFormProps = {
    userId: string,
    type: "Create" | "Update"
}

const PostForm = ({ userId, type}: EventFormProps) => {

    const initalValues = eventDefaultValues

      // 1. Define your form.
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initalValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event title" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                    <Dropdown onChangeHandler={field.onChange} value={field.value}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>



        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea placeholder="Desription" {...field} className="textarea rounded-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-2xl bg-gray-50 px-4 py-2 border-2">
                            <Image 
                            src="/assets/icons/location-grey.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            /> 
                            <Input placeholder="Location" {...field} className="input-field border-none" />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>


        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="startDateTime"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-2xl bg-gray-50 px-4 py-2 border-2">
                            <Image 
                            src="/assets/icons/calendar.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            className="filter-grey"
                            /> 
                            <p className="ml-3 whitespace-nowrap text-grey-600">Start Date:</p>
                            <DatePicker selected={field.value} onChange={(date: Date) => field.onChange(date)} />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PostForm
