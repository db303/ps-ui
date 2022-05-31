import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'

interface FormPasswordInputProps {
  id: string
  label: string
  placeholder: string
  isInvalid: boolean
  errorMessage: string
  register: any  
}

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  id,
  label,
  placeholder,
  isInvalid,
  errorMessage,
  register
}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl id={id} isInvalid={isInvalid}>
      <FormLabel>{ label }</FormLabel>
      <InputGroup>
        <Input
          isInvalid={isInvalid}
          id={id}
          type={showPassword ? 'text': 'password'}
          placeholder={placeholder}
          {...register}
        />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() =>
              setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage color='crimson'>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormPasswordInput