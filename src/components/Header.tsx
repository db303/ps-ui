import React from 'react'
import Link from 'next/link'
import {
  Flex,
  Button,
  Stack,
  Spacer,
} from '@chakra-ui/react'

import Logo from './Logo'


interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {


  return (
    <Flex
      minH={'40px'}
      bg={'black'}
      justify='center'
      py={{ base: 2 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'grey'}
    >
      <Flex w='1440px' px={5}>
        <Logo />
        <Spacer />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Link href='/auth/signin' passHref>
              <Button
                as='a'
                variant='link'
              >Log In</Button>
            </Link>
            <Link href='/auth/signup' passHref>
              <Button>Register</Button>
            </Link>
  
        </Stack>
      </Flex>
    </Flex>
  )
}






export default Header
