import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import staycation from '../public/images/projects/project-1.png'
import staycationAdmin from '../public/images/projects/project-2.png'
import movieApp from '../public/images/projects/project-3.png'
import virtue from '../public/images/projects/project-4.png'
import EvocativeClub from '../public/images/projects/project-5.png'
import infoPDAM from '../public/images/projects/campus-project-1.png'
import kopiHub from '../public/images/projects/campus-project-2.png'
import SystemInventory from '../public/images/projects/campus-project-3.png'
import lovcat from '../public/images/projects/collaboration-project-1.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="evocative"
            title="Evocative Club"
            thumbnail={EvocativeClub}
          >
            Evocative is a streetwear brand that introduces various cultures
            from around the globe through our products.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="staycation"
            title="Staycation"
            thumbnail={staycation}
          >
            This project is a front-end product hotel, who design and develop by
            Maulana Adil.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="staycationAdmin"
            title="Staycation (Admin)"
            thumbnail={staycationAdmin}
          >
            This project is a back-end product hotel with Express and mongoDB
            for Database.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="moviecatalogue"
            title="Movie Catalogue"
            thumbnail={movieApp}
          >
            this application helps you find and add the movie you are looking
            for.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="virtue" title="Virtue Pictures" thumbnail={virtue}>
            building a company profile for virtue pictures company.
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
            <WorkGridItem id="lovcat" title="Lov Cat" thumbnail={lovcat}>
              an Website to help your cat to find adopter and provide the latest
              news about cats that are around you.
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
              id="indam"
              title="INDAM (Info PDAM)"
              thumbnail={infoPDAM}
            >
              This Website Will Help you to ge information about customers of
              PDAM Sumedang.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="kopihub" title="Kopi Hub" thumbnail={kopiHub}>
              Website to manage the system of the coffee shop
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="system-inventory"
              title="Sytem Inventory"
              thumbnail={SystemInventory}
            >
              Website to manage inventory system at SMPN 1 Tasikmalaya
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

module.exports = Projects
