"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const form = useForm<RegisterFormInputs>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    // TODO: Implement registration logic
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8E8E8] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <Image
          src="/LogoTwo.png"
          alt="Drip Republic Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Create your account</h1>
        <p className="text-gray-500 mb-6 text-center w-full">Join Drip Republic and elevate your style today.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your Name" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="praise@gmail.com" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" autoComplete="new-password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type="submit" className="w-full bg-[#f74d25] hover:bg-[#e63d15] text-white font-semibold rounded-md py-3 mt-2 transition-colors duration-200">Sign Up</button>
          </form>
        </Form>
        <div className="mt-6 text-center w-full">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login" className="text-[#f74d25] font-medium hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
