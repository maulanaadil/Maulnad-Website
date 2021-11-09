import { Badge, Center, Container, Link } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'
import { Image, List, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Informasi PDAM">
    <Container>
      <Title>
        Informasi Pembayaran PDAM <Badge>2021</Badge>
      </Title>
      <Center>
        <Image src="/images/projects/campus-project-1.png" alt="Indam" mb={8} />
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
          <Link href="http://tugasbesar.maulnad.my.id/">
            http://tugasbesar.maulnad.my.id/
            <ExternalLinkIcon mx={4} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/IOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, JQUERY, SASS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/campus-project-1(1).png" alt="Indam" />
      <WorkImage src="/images/projects/campus-project-1(2).png" alt="Indam" />
    </Container>
  </Layout>
)

export default Work
