import React from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
} from '@chakra-ui/react';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => (
  <Link href='/'>
    <a>
      <Flex align='center' h='100%'>
        <Box height={30}>
          <img
            style={{height: '100%'}}
            src={'/ps-logo-white-v1.svg'}
            alt='Pattern Saver' />
        </Box>
      </Flex>
    </a>
  </Link>
)

export default Logo


{/* <h1>
  <a href="http://stackoverflow.com">
    <img src="logo.png" alt="Stack Overflow" />
  </a>
</h1> */}
