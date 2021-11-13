import { Center, Container } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { Badge, ListItem, List, Link, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="movieCatalogue">
    <Container>
      <Title>
        Movie Catalogue <Badge>2021</Badge>
      </Title>
      <Center>
        <Image
          src="/images/projects/project-3.png"
          alt="MovieCatalogue"
          mb={8}
        />
      </Center>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Mobile</Meta>
          <Link href="#">
            - <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Retrofit, Mockito, MVVM</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/project-3(1).png" alt="Moviecatalogue" />
      <WorkImage src="/images/projects/project-3(2).png" alt="Moviecatalogue" />
    </Container>
  </Layout>
)

export default Work
