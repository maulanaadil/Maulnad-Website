import { Badge, Image, ListItem, List, Link } from '@chakra-ui/react'
import { Container, Center } from '@chakra-ui/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Staycation Admin">
    <Container>
      <Title>
        Staycation Admin <Badge>2021</Badge>
      </Title>
      <Center>
        <Image
          src="/images/projects/project-2.png"
          alt="Staycation Admin"
          mb={8}
        />
      </Center>
      <Paragraph>
        A Content Management System <i>(CMS)</i> application for managing
        staycation applications and includes a RESTFUL API <i>(Backend)</i>{' '}
        using a MongoDB database
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://staycation-admin-server.herokuapp.com/">
            https://staycation-admin-server.herokuapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, Mongoose, EJS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
