import { Center, Container } from '@chakra-ui/layout'
import { Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'
import { Image, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="KopiHub">
    <Container>
      <Title>
        KopiHub <Badge>2020</Badge>
      </Title>
      <Center>
        <Image
          src="/images/projects/campus-project-2.png"
          alt="KopiHub"
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
          <Meta>Website</Meta>
          <Link href={''}>-</Link>
          <ExternalLinkIcon mx={4} />
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, CSS, JQUERY</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/campus-project-2(1).png"
        alt="kopiHUB"
      ></WorkImage>
      <WorkImage
        src="/images/projects/campus-project-2(2).png"
        alt="kopiHUB"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
