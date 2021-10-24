import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react'
import Typist from 'react-typist'

const NotFound = () => {
  return (
    <Container align="center">
      <Heading as="h1" my={5} mx={5}>
        <Typist>Not found</Typist>
      </Heading>
      <Image
        src="/images/contents/empty.png"
        alt="Empty Picture"
        size="200px"
        objectFit="cover"
        borderRadius="20"
        my="8"
      />
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
