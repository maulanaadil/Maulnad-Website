import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import androidStudyJams from '../public/images/posts/post-1.jpg'
import reactTypeScriptBootcamp from '../public/images/posts/post-2.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recently Posted
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Android Study Jams"
            thumbnail={androidStudyJams}
            href="https://www.youtube.com/watch?v=dhPDlxcKbeo"
          >
            Became a speaker and facilitator at the Android Study Jams event.
            This event was delivered in Bahasa Indonesia 🇮🇩.
          </GridItem>
          <GridItem
            title="React Typescript"
            thumbnail={reactTypeScriptBootcamp}
            href="https://www.youtube.com/watch?v=R53DJrazOQU&t=1585s"
          >
            Became a moderator at bootcamp React Typescript. This event was
            delivered in Bahasa Indonesia 🇮🇩.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
