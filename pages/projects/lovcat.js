import { Badge, Center } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Lovcat">
    <Title>
      Lov Cat<Badge>2021</Badge>
    </Title>
    <Center>
      <WorkImage
        src="/images/projects/collaboration-project-1.png"
        alt="LovCat"
      />
    </Center>
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Paragraph>
  </Layout>
)

export default Work
