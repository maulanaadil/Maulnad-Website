import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import staycation from '../public/images/projects/project-1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="staycation"
            title="staycation"
            thumbnail={staycation}
          >
            This project is a product hotel base on client who design and
            develop by Maulana Adil.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="staycation"
              title="staycation"
              thumbnail={staycation}
            >
              This project is a product hotel base on client who design and
              develop by Maulana Adil.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Campus Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="staycation"
              title="staycation"
              thumbnail={staycation}
            >
              This project is a product hotel base on client who design and
              develop by Maulana Adil.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

module.exports = Projects
