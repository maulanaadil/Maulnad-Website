import NextLink from 'next/link'
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center">
      <Heading variant="404-title" my={5} mx={5}>
        404
      </Heading>
      <Text>
        Look like page is missing, Don&apos;t worry i&apos;m gonna figure out
      </Text>
      <Text variant="missing-desc">
        The page you&apos;re looking for was not found.
      </Text>

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
