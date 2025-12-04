import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({name, label, placeholder, register, error, validation, type, disabled, value}: FormInputProps) => {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>{label}</Label>  
        <Input type={type} id= {name} placeholder={placeholder} disabled={disabled} value={value}
        className={cn('form-input', {'opcaity-50 cursor-not-allowed': disabled}, {...register(name, validation)})}
        />
    </div>
  )
}

export default InputField
