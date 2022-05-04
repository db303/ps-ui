import { Box, Heading, Center } from "@chakra-ui/react"

const Index = () => (
  <Box
    mt={20}
    mx="auto"
    w="100%"
  >
    <Center>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
          Comming soon!
      </Heading>
    </Center>
    <Box maxWidth='320px' mx='auto' mt={40}>
      <img src='/wip.svg' alt='Work in progress' />
    </Box>
  </Box>
)

export default Index
