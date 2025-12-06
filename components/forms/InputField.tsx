import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({name, label, placeholder, register, error, validation, type, disabled}: FormInputProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='form-label'>{label}</Label>

      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, validation)}   
        className={cn(
          'form-input',
          {
            'opacity-50 cursor-not-allowed': disabled,
            'border-red-500': error
          }
        )}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}


export default InputField
