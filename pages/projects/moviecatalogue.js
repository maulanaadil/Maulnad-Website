import { Center, Container } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
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
        An application that recommends and informs movies that are currently
        showing, and there is a feature to save information about the movies you
        like.
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
    </Container>
  </Layout>
)

export default Work
