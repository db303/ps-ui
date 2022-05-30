import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import apiClient from '../utils/http-common'
import { AxiosError } from 'axios'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

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

  const [showPassword, setShowPassword] = useState(false)
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
    <Flex
      minH={'calc(100vh - 57px)'}
      align={'center'}
      justify={'center'}
      bg={'black'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up for an account
          </Heading>
        </Stack>
        {getError && <div>{getError}</div>}
        <Box
          bg={'black'}
          p={8}
          border={"1px"}
          borderColor={'grey'}
          >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
            <FormControl id='username' isInvalid={errors.username}>
                <FormLabel>User name</FormLabel>
                <Input
                  id='username'
                  type='text'
                  placeholder='User name'
                  {...register('username', {
                    required: 'User name is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id='email' isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  id='email'
                  type='text'
                  placeholder='Email'
                  {...register('email', {
                    required: 'Email is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    {...register('password', {
                      required: 'Password is required',
                    })}
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
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  isLoading={isPostingSignUp}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUp
