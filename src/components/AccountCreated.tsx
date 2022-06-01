import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";
import Link from 'next/link'

const AccountCreated: React.FC = () => (
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
        Please check your email
      </AlertTitle>
      <AlertDescription maxWidth='sm' mb={4}>
        Your account has been created, but you'll have to activate it before you can use it.
        Please check your <b>email</b>, and click on the <b>activation link</b> we sent you.
      </AlertDescription>
      <Link href='/' passHref>       
        <Button variant='outline' size='lg'>OK</Button>
      </Link>
    
  </Alert>   
)

export default AccountCreated
  