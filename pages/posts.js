import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Divider,
  Box,
  Button,
  Image
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import { GridItem } from '../components/grid-item'
import Typist from 'react-typist'

const Posts = () => (
  <Layout title="Posts">
    <Container align="center">
      <Image
        src="/images/contents/empty.png"
        objectFit="cover"
        alt="Empty"
        mt="100"
        size="200px"
      />
      <Text fontSize="3xl" my="8" align="center">
        <Typist>No Post Avaible</Typist>
      </Text>

      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>

      {/* Contoh Menampilkan Data Post */}

      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
