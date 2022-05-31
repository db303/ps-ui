import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

interface FormInputProps {
  id: string
  type: 'text' | 'password'
  label: string
  placeholder: string
  isInvalid: boolean
  errorMessage: string
  register: any  
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  placeholder,
  isInvalid,
  errorMessage,
  register
}) => {
  return (
    <FormControl id={id} isInvalid={isInvalid}>
      <FormLabel>{ label }</FormLabel>
      <Input
        isInvalid={isInvalid}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <FormErrorMessage color='crimson'>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormInput