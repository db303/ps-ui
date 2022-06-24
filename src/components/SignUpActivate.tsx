import React, { useState, useEffect } from 'react'
import { FieldValues, useForm, UseFormSetError } from 'react-hook-form'
import { useQuery } from 'react-query'
import apiClient from '../utils/http-common'
import { AxiosError } from 'axios'

import AuthPageLayout from './AuthPageLayout'
import AccountActivated from './AccountActivated'
import AccountActivationFail from './AccountActivationFail'

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


interface SignUpActivateProps {
  activationToken: string
}

const SignUpActivate: React.FC<SignUpActivateProps> = ({ activationToken }) => {

  const [isAccountActivated, setAccountActivated] = useState(false)
  const [, setIsError] = useState(false)

  const { isLoading: isActivating, refetch: activateUser } = useQuery(
    ['activate-account', activationToken],  
    async () => {
      return await apiClient.get<SignupSuccessResponse>(`/auth/signup/activate?activation_token=${activationToken}`)
    }, 
    { 
      enabled: false, 
      retry: false,
      onSuccess: (res) => {
        setAccountActivated(true)
        
      }, 
      onError: (_err: AxiosError) => {
        setAccountActivated(false)
      } 
    }
  );
    
  useEffect(() => {
    activationToken && activateUser()  
  }, [activationToken]);
    
  
  return (
    <AuthPageLayout title='Activate your account'> 
    {
      isAccountActivated ? <AccountActivated /> : <AccountActivationFail /> 
    } 
    </AuthPageLayout>
  )
}

export default SignUpActivate
