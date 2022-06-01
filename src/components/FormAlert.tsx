import React from 'react'
import { 
  Alert,
  AlertTitle,
  AlertDescription,
  Stack,
} from '@chakra-ui/react'

export interface FormAlertProps {
  title: string,
  description?: string
}

const FormAlert: React.FC<FormAlertProps> = ({title, description}) => {
  return (
    <Alert status='error' variant='left-accent' color='crimson' borderLeftColor='crimson'>
      <Stack pl={5}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Stack>
    </Alert>)
}

export default FormAlert