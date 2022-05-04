import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Page from '../components/Page'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  )
}

export default MyApp
