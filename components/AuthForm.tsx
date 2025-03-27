"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string(),
        email: z.string().email(),
        password: z.string().min(3),
    });
}

const AuthForm = ({type}: {type: FormType}) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:"",
        email: "",
        password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        
        if (type === "sign-in") {
            // Sign in logic
            console.log("Sign in", values);
            toast.success("Signed in successfully.");
            router.push("/");
        } else {
            // Sign up logic
            console.log("Sign up", values);
            toast.success("Account created succesfully. Please sign in.");
            router.push("/sign-in");
        }

    } catch (error) {
      console.error(error);
      toast.error(`An error occurred. ${error}`);
        
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w[556px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
                <FormField 
                    control={form.control} 
                    name="name" 
                    label="Name" 
                    placeholder="Your Name" 
                />
                )}
                <FormField 
                    control={form.control} 
                    name="email" 
                    label="Email" 
                    placeholder="Your Email Address"
                    type="email"
                />
                <FormField 
                    control={form.control} 
                    name="password" 
                    label="Password" 
                    placeholder="Enter Your Password" 
                    type="password"
                />

            <Button className="btn" type="submit">{isSignIn ? "Sign in" : "Create an Account"}</Button>
          </form>
        </Form>

        <p className="text-center">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <Link href = {!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
            {!isSignIn ? "Sign in" : "Sign up"}
            </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
