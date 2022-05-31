import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
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

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {

  const [getError, setGetError] = useState(null)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const { isLoading: isPostingSignUp, mutate: postSignup } = useMutation(

    async (signupData: SignupRequestPayload) => {
      return await apiClient.post<SignupSuccessResponse>(`/auth/signup`, signupData );
    },
    {
      onSuccess: (res) => {
        console.log("on success", res)
      },
      onError: (err: AxiosError) => {
        setGetError((err.response?.data as SignUpErrorResponse).message)  
      },
    }
  )
 
  const onSubmit = (values: SignupRequestPayload) => postSignup(values)
  
  

  return (
    <AuthPageLayout 
      title='Register for an account' 
      errorMessage={getError}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormInput
            id='username'
            type='text'
            label='User name'
            placeholder='User name'
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
              errors.username?.type == 'required' && 'User name is required' ||
              errors.username?.type == 'pattern' && 'User name can only contain letters, numbers and underscores' ||
              errors.username?.type == 'minLength' && 'User name must be at least 2 characters long' ||
              errors.username?.type == 'maxLength' && 'User name can not be longer than 30 characters'
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
              errors.email?.type == 'required' && 'Email is required' ||
              errors.email?.type == 'pattern' && 'Invalid email address'
            }
          />
          <FormPasswordInput
            id='password'
            label='Password'
            placeholder='Password'
            isInvalid={errors.email} 
            register={
              register('password', {
                required: true,
                pattern: /^(?=\P{Ll}*\p{Ll})(?=\P{Lu}*\p{Lu})(?=\P{N}*\p{N})(?=[\p{L}\p{N}]*[^\p{L}\p{N}])[\s\S]{8,}$/
              })
            } 
            errorMessage={
              errors.password?.type == 'required' && 'Password is required' ||
              errors.password?.type == 'pattern' && 'Password must be at least 8 characters long and contain one lowercase letter, one capital letter one symbol and a number'  
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
    </AuthPageLayout>
  )
}

export default SignUp
