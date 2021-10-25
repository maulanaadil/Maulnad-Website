import { Center, Container } from '@chakra-ui/layout'
import { Badge } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="KopiHub">
    <Container>
      <Title>
        KopiHub <Badge>2020</Badge>
      </Title>
      <Center>
        <WorkImage src="/images/projects/campus-project-2.png" alt="KopiHub" />
      </Center>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Paragraph>
    </Container>
  </Layout>
)

export default Work
