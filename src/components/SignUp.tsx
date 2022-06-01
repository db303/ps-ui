import React, { useState } from 'react'
import { FieldValues, useForm, UseFormSetError } from 'react-hook-form'
import { useMutation } from 'react-query'
import apiClient from '../utils/http-common'
import { AxiosError } from 'axios'
import {
  Stack,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'

import FormInput from './FormInput'
import FormPasswordInput from './FormPasswordInput'
import AuthPageLayout from './AuthPageLayout'
import AccountCreated from './AccountCreated'

type SignupRequestPayload = {
  username: string
  email: string
  password: string
}

type SignupSuccessResponse = {
  status: string
  data: object
}

type SignUpErrorResponse = {
  status: string
  message: string
}

const parseError = (error: AxiosError, setError: UseFormSetError<FieldValues>) => {
  const err = (error.response?.data as SignUpErrorResponse)
  
  if (err.message.includes('Username not available.')) {
    setError('username', {type: 'custom', message: 'Please choose a different username.'}, {shouldFocus: true})

    return {
      title: 'Username not available.',
      description: "We're sorry, but the username has already been chosen by another user. Please choose a different username."
    }
  }

  if (err.message.includes('is not a valid password.')) {
    setError('password', {type: 'custom', message: 'Please choose a different password.'}, {shouldFocus: true})

    return {
      title: 'Wrong password',
      description: 'Make sure password contains at least one uppercase letter, one lowercase letter, one symbol and one number'
    }
  }

  if (err.message.includes('Email not available.')) {
    setError('email', {type: 'custom', message: 'Please choose a different email.'}, {shouldFocus: true})

    return {
      title: 'Email not available.',
      description: "We're sorry, but the email has already been used. Please choose a different email."
    }
  }

  return {
    title: 'Unknown Error',
    description: 'Something went wrong. Please try again.'
  }
}


interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {

  const [getError, setRegisterError] = useState<{title: string, description: string}>({ title: '', description: ''})
  const [isAccountCreated, setAccountCreated] = useState(false)

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const { isLoading: isPostingSignUp, mutate: postSignup } = useMutation(

    async (signupData: SignupRequestPayload) => {
      return await apiClient.post<SignupSuccessResponse>(`/auth/signup`, signupData );
    },
    {
      onSuccess: (res) => {
        setRegisterError(null)
        setAccountCreated(true)
      },
      onError: (err: AxiosError) => {
        setRegisterError(parseError(err, setError))  
      },
    }
  )
 
  const onSubmit = (values: SignupRequestPayload) => postSignup(values)
  
  return (
    <AuthPageLayout 
      title='Register for an account' 
      errorTitle={getError && getError.title}
      errorDescription={getError && getError.description}
    >
      {
        isAccountCreated ? <AccountCreated /> :
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormInput
            id='username'
            type='text'
            label='Username'
            placeholder='Username'
            isInvalid={errors.username} 
            register={
              register('username', {
                required: true,
                minLength: 2,
                maxLength: 30,
                pattern: /^[0-9a-z_]+$/
              })
            } 
            errorMessage={
              errors.username?.type == 'required' && 'User name is required.' ||
              errors.username?.type == 'pattern' && 'User name can only contain letters, numbers and underscores.' ||
              errors.username?.type == 'minLength' && 'User name must be at least 2 characters long.' ||
              errors.username?.type == 'maxLength' && 'User name can not be longer than 30 characters.' ||
              errors.username?.type == 'custom' && errors.username?.message 
            }
          />
          <FormInput
            id='email'
            type='text'
            label='Email'
            placeholder='Email'
            isInvalid={errors.email} 
            register={
              register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
              })
            } 
            errorMessage={
              errors.email?.type == 'required' && 'Email is required.' ||
              errors.email?.type == 'pattern' && 'Invalid email address.' ||
              errors.email?.type == 'custom' && errors.email?.message
            }
          />
          <FormPasswordInput
            id='password'
            label='Password'
            placeholder='Password'
            isInvalid={errors.password} 
            register={
              register('password', {
                required: true
              })
            } 
            errorMessage={
              errors.password?.type == 'required' && 'Password is required' ||
              errors.password?.type == 'custom' && errors.password?.message
            }
          />
          <Stack spacing={10} pt={2}>
            <Button
              type="submit"
              loadingText="Submitting"
              isLoading={isPostingSignUp}
              >
              Register
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </form>
    }
    </AuthPageLayout>
  )
}

export default SignUp
