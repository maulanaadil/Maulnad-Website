import { Badge, Center, Container, Link } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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

      <WorkImage src="/images/projects/project-4(1).png" alt="Virtue" />
      <WorkImage src="/images/projects/project-4(2).png" alt="Virtue" />
    </Container>
  </Layout>
)

export default Work
