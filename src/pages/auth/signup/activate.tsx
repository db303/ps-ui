import React from 'react'
import { useRouter } from 'next/router'
import SignUpActivate from '../../../components/SignUpActivate'


const SignUpActivatePage: React.FC = () => {
  const { query: { activation_token }} = useRouter()
  
  return <SignUpActivate activationToken= {activation_token as string} />
}

export default SignUpActivatePage
