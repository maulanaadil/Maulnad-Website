import { Badge, Center } from '@chakra-ui/layout'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="movieCatalogue">
    <Title>
      Movie Catalogue <Badge>2021</Badge>
    </Title>
    <Center>
      <WorkImage
        src="/images/projects/project-3.png"
        alt="MovieCatalogue"
        mb={8}
      />
    </Center>
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&apos;s standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book.
    </Paragraph>
  </Layout>
)

export default Work
