import React from 'react'
import { 
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon 
} from '@chakra-ui/react'

interface FormAlertProps {
  title: string,
  description?: string
}

const FormAlert: React.FC<FormAlertProps> = ({title, description}) => {
  return (
    <Alert status='error' variant='left-accent' color='crimson' borderLeftColor='crimson'>
      <AlertIcon color='crimson' />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription> }
    </Alert>)
}

export default FormAlert