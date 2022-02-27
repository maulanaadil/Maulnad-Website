import { Center, Container } from '@chakra-ui/layout'
import { Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage, Meta } from '../../components/work'
import { Image, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Evocative Club">
    <Container>
      <Title>
        Evocative Club <Badge>2022</Badge>
      </Title>
      <Center>
        <Image
          src="/images/projects/project-5.png"
          alt="Evocative Club"
          mb={8}
        />
      </Center>
      <Paragraph>
        Evocative is a streetwear brand that introduces various cultures from
        around the globe through our products. Our mission is to perfect youth
        fashion style with our product and we also have a vision to be a pioneer
        of clothing brand in Indonesia.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={'https://evocativeclub.com/'}>
            https://evocativeclub.com/
          </Link>
          <ExternalLinkIcon mx={4} />
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Express, SASS, MONGODB</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/project-5(1).png"
        alt="EvocativeClub"
      ></WorkImage>
      <WorkImage
        src="/images/projects/campus-project-5(2).png"
        alt="EvocativeClub"
      ></WorkImage>
    </Container>
  </Layout>
)

export default Work
