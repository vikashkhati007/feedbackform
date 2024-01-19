"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const FeedbackForm = () => {
  //   toast("Event has been created", {
  //     description: "Sunday, December 03, 2023 at 9:00 AM",
  //     action: {
  //       label: "Undo",
  //       onClick: () => console.log("Undo"),
  //     },
  //   });

  const handleForm = (e: any) => {
    e.preventDefault();
    console.log();
    const schema = z.object({
      firstName: z.string().min(2).max(20).optional(),
      lastName: z.string().min(2).max(20).optional(),
      email: z.string().email(),
      message: z.string().min(10).max(1000),
    });

    const data = schema.safeParse({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });
    if (!data.success) {
      data.error.issues.map((issue) =>
        toast("Error", {
          description: issue.path + " -> " + issue.message,
        })
      );
    }
    if (data.success) {
      toast("Sucess", {
        description: "Message Sent Sucessfully ",
      });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm items-start space-x-2  p-5 gap-5 rounded-md shadow-md bg-white border-black">
      <h1 className="font-bold text-2xl md:text-3xl px-3">Feedback Form</h1>
      <form className="forminput flex flex-col gap-4" onSubmit={handleForm}>
        <div className="fullnamecontainer grid grid-cols-2 gap-2">
          <Input name="firstName" type="text" placeholder="FirstName" />
          <Input name="lastName" type="text" placeholder="LastName" />
        </div>
        <Input name="email" type="email" placeholder="Email" />
        <div className="grid w-full gap-2">
          <Textarea name="message" placeholder="Type your message here." />
          <Button>Send message</Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
