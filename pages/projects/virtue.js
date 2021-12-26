import { Badge, Center, Container, Link } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import { Image, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Virtue">
    <Container>
      <Title>
        Virtue Pictures <Badge>2021</Badge>
      </Title>
      <Center>
        <Image src="/images/projects/project-4.png" alt="virtue" mb={8} />
      </Center>
      <Paragraph>
        A main page <i>(Landing Page)</i> on the virtue pictures company that
        informs everything that is served by the company.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://virtuepictures.com/">
            https://virtuepictures.com/
            <ExternalLinkIcon mx={4} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/IOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, JQUERY, CSS, PHP, Laravel, Bootstrap</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
