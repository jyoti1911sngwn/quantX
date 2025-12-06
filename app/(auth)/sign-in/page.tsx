'use client'
import FooterLinks from '@/components/forms/FooterLinks'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import { signInWithEmailFunction } from '@/lib/actions/auth.actions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface SignInFormData {
  fullName: string
  email: string
  password: string
  country?: string
  investmentGoals?: string
  riskTolerance?: string
  preferredIndustry?: string
}

const SignIn = () => {

  const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors, isSubmitting },
    } = useForm<SignInFormData>(
      {
          defaultValues : {
  fullName: '',
  email: '',
  password: '',
  country: 'India',
  investmentGoals: 'Growth',
  riskTolerance: 'Medium',
  preferredIndustry: 'Technology',
      }, mode :'onBlur'}
    )
    const router = useRouter();
     const onSubmit = async(data : SignInFormData) => {
    try{
        const result = await signInWithEmailFunction({
            email: data.email,
            password: data.password
        });
        if (result.success){
          toast.success('Login successful');
            // Redirect with a small delay to ensure session is set
            setTimeout(() => {
              router.push('/')
            }, 500);
        } else {
          toast.error(result.message || 'Sign in failed');
        }
    }
    catch(e){
        console.error(e)
        toast.error('Sign in failed. Please try again.', {
          description: e instanceof Error ? e.message : 'An unexpected error occurred.',
        })
    }
  }
  return (
    <>
       <h1 className='form-title'>
        Log In to Your Account
        </h1>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
           <InputField 
            name="email"
            label= "Email"
            placeholder= "Enter Your Email"
            register= {register}
            error={errors.email}
            validation= {{required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, minLength: 2}}
            />
            <InputField 
                        name="password"
                        label= "Password"
                        placeholder= "Enter Your Password"
                        register= {register}
                        error={errors.password}
                        validation= {{required: "Password is required", minLength: 6}}
                        />
           
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
            {isSubmitting ? 'Logging In...' : 'Start your Investing Journey'}
        </Button>
        <FooterLinks text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
        </form>
    </>
  )
}

export default SignIn
