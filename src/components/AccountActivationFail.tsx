import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";
import Link from 'next/link'


const AccountActivationFail: React.FC = () => (
  <Alert
    status='error'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='300px'
    backgroundColor={'black'}
  >
   
      <AlertIcon boxSize='40px' mr={0} mb={2} color='crimson' />
      <AlertTitle mt={4} mb={2} fontSize='lg'>
        Activation failed
      </AlertTitle>
      <AlertDescription maxWidth='sm' mb={4}>
        Sorry, something went wrong while we tried to activate your account. <br /><br />
        Most likely, the link you clicked didn't contain all the information we need.
      </AlertDescription>
      <Link href='/auth/signin' passHref>       
        <Button variant='outline' size='lg'>OK</Button>
      </Link>
  </Alert>   
)

export default AccountActivationFail
  