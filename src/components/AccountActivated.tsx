import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";
import Link from 'next/link'

interface AccountActivatedProps {
}

const AccountActivated: React.FC<AccountActivatedProps> = () => (
  <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='300px'
    backgroundColor={'black'}
  >
   
      <AlertIcon boxSize='40px' mr={0} mb={2} color='green' />
      <AlertTitle mt={4} mb={2} fontSize='lg'>
        Account activated
      </AlertTitle>
      <AlertDescription maxWidth='sm' mb={4}>
        Your account is activated. You can now start using Pattern Saver! 
      </AlertDescription>
      <Link href='/auth/signin' passHref>       
        <Button variant='outline' size='lg'>Login</Button>
      </Link>
  </Alert>   
)

export default AccountActivated
  