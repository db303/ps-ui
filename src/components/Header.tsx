import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Spacer,
  Heading,
  Grid,
  GridItem,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import Logo from './Logo';


interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      minH={'40px'}
      bg={useColorModeValue('white', 'black')}
      justify='center'
      py={{ base: 2 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex w='1440px' px={5}>
        <Logo color={useColorModeValue('black', 'white')}/>
        <Spacer />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Button
              borderRadius={0}
              variant='ghost'
              _focus={{ boxShadow: 'none' }}
              onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              borderRadius={0}
              variant='link'
              _focus={{ boxShadow: 'none' }}
            >Sign In</Button>
            <Button
              borderRadius={0}
              _focus={{ boxShadow: 'none' }}
              colorScheme='orange'
            >Sign Up</Button>
        </Stack>
      </Flex>

      {/* <Flex
        bg={useColorModeValue('white', 'black')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'40px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Box maxW={1440} w='100%'>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} maxH='40px'>
            <Logo />
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button>Sign In</Button>
              <Button>Sign Up</Button>
          </Stack>
          </Box>
      </Flex> */}
    </Flex>
  );
}






export default Header
