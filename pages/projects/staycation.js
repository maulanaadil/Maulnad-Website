import { Badge, Image, ListItem, List, Link } from '@chakra-ui/react'
import { Container, Center } from '@chakra-ui/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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

      <WorkImage src="/images/projects/staycation-1" alt="Staycation" />
      <WorkImage src="/images/projects/staycation-2" alt="Staycation" />
    </Container>
  </Layout>
)

export default Work
