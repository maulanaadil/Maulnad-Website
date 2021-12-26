import { Badge, Image, ListItem, List, Link } from '@chakra-ui/react'
import { Container, Center } from '@chakra-ui/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="staycation">
    <Container>
      <Title>
        Staycation <Badge>2021</Badge>
      </Title>
      <Center>
        <Image src="/images/projects/project-1.png" alt="Staycation" mb={8} />
      </Center>
      <Paragraph>
        an application that helps in making hotel reservations and helps find
        the best hotel recommendations in Indonesia and provides tourist
        attractions closest to the hotel you choose.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sstaycation.herokuapp.com/">
            https://sstaycation.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, SASS, React</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
