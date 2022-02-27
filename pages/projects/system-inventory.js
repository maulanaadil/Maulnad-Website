import { Center, Container } from '@chakra-ui/layout'
import { Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'
import { Image, List, ListItem, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Invetory System">
    <Container>
      <Title>
        Invetory System <Badge>2021</Badge>
      </Title>
      <Center>
        <Image
          src="/images/projects/campus-project-3.png"
          alt="Invetory System"
          mb={8}
        />
      </Center>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        {'\n'}
      </Paragraph>
      <Text as="i">
        Username: <Text as="mark">admin</Text>
      </Text>
      <br />
      <Text as="i">
        Password: <Text as="mark">admin</Text>
      </Text>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={'https://imk.rifkikautsar.my.id/'}>
            https://imk.rifkikautsar.my.id/
          </Link>
          <ExternalLinkIcon mx={4} />
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, CSS, JQUERY, SASS</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/campus-project-3(1).png"
        alt="inventorySystem"
      ></WorkImage>
      <WorkImage
        src="/images/projects/campus-project-3(2).png"
        alt="inventorySystem"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
