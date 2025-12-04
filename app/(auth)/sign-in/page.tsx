'use client'
import FooterLinks from '@/components/forms/FooterLinks'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

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
     const onSubmit = async(data : SignInFormData) => {
    try{
        console.log(data)
    }
    catch(e){
        console.error(e)
    }
  }
  return (
    <>
       <h1 className='form-title'>
        Log In to Your Account
        </h1>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <InputField
            name="fullName"
            label= "FullName"
            placeholder= "Your Name"
            register= {register}
            error={errors.fullName}
            validation= {{required: "Full Name is required", minLength: 2}}
            />
            {errors.fullName && <p className='text-sm text-red-500'>{errors.fullName.message}</p>}
            <InputField 
            name="email"
            label= "Email"
            placeholder= "Enter Your Email"
            register= {register}
            error={errors.email}
            validation= {{required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, minLength: 2}}
            />
           
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
            {isSubmitting ? 'Creating Account...' : 'Start your Investing Journey'}
        </Button>
        <FooterLinks text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
        </form>
    </>
  )
}

export default SignIn
