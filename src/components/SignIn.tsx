import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'


interface SignInProps {}

export const SignIn: React.FC<SignInProps> = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Flex
      minH={'calc(100vh - 57px)'}
      align={'center'}
      justify={'center'}
      bg={'black'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            bg={'black'}
            boxShadow={'lg'}
            p={8}
            border={"1px"}
            borderColor={'grey'}
          >
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

              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  id='password'
                  type='password'
                  placeholder='Password'
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type='submit'
                  isLoading={false}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
    </Stack>
  </Flex>
  );
}

export default SignIn
