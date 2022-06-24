import React from 'react'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import FormAlert from './FormAlert'

interface AuthPageLayoutProps {
  title: string
  errorTitle?: string
  errorDescription?: string
}

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children, errorTitle, errorDescription, title }) => {
  return (
    <Flex
      minH={'calc(100vh - 57px)'}
      align={'center'}
      justify={'center'}
      bg={'black'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{ title }</Heading>
        </Stack>
        { errorTitle && <FormAlert title={errorTitle} description={errorDescription} />}
        <Box
          bg={'black'}
          p={8}
          border={"1px"}
          borderColor={'grey'}
        >
          { children }
        </Box>
      </Stack>
    </Flex>  
  )
}

export default AuthPageLayout