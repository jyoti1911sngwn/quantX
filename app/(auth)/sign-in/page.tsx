"use client";
import FooterLinks from "@/components/forms/FooterLinks";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: "onBlur",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);
    try {
      const result = await signInWithEmail(data.email, data.password);

      if (result.success) {
        toast.success("Login successful", { duration: 2000 });

        // Wait until toast duration ends before redirect
        setTimeout(() => {
          router.replace("/"); // replace avoids extra history entry
        }, 2000);
      } else {
        toast.error(result.message || "Sign in failed");
      }
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed. Please try again.", {
        description: e instanceof Error ? e.message : "Unexpected error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="form-title">Log In to Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter Your Password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 6 }}
        />

        <Button type="submit" disabled={loading} className="yellow-btn w-full mt-5">
          {loading ? "Logging In..." : "Start your Investing Journey"}
        </Button>

        <FooterLinks text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
      </form>
    </>
  );
};

export default SignIn;
