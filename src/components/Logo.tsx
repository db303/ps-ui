import React from 'react'
import Link from 'next/link'
import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

interface LogoProps {
  color: 'white' | 'black'
}

const Logo: React.FC<LogoProps> = () => (
  <Link href='/'>
    <a>
      <Flex align='center' h='100%'>
        <Box height={30}>
          <img
            style={{height: '100%'}}
            src={useColorModeValue('/ps-logo-black-v1.svg', '/ps-logo-white-v1.svg')}
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
