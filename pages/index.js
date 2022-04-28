import {
  Link,
  Container,
  Heading,
  Box,
  Text,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioDesc, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDribbble
} from 'react-icons/io5'

import Typist from 'react-text-typist'
import certificate1 from '../public/images/certificate1.jpg'
import certificate2 from '../public/images/certificate2.jpg'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('#F7F7F7', 'whiteAlpha.200')}
        marginTop={10}
        marginBottom={10}
      >
        Hi Folks!👋,{' '}
        <Typist
          sentences={[
            `I'm a Front-End Developer`,
            `I'm a UI/UX Enthusiast`,
            'Nice to meet ya!'
          ]}
          cursorSmooth={true}
          loop={false}
        ></Typist>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading fontSize="24px" variant="page-title">
            Maulana Adil
          </Heading>
          <Text fontSize="15px" color="gray.400" my={2}>
            Undergraduate ( Developer / Designer )
          </Text>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box w="50px">
          <Divider orientation="horizontal" my={4} />
        </Box>
        <Paragraph>
          He&apos;s a Developer and a Designer. He loves to designing an app or
          website then slicing or develope into an software. He&apos;s studies
          Information Technology at{' '}
          <Link href="https://www.unikom.ac.id/">
            Indonesia Computer University.
          </Link>{' '}
          During his studies, Adil also became Core Teams{' '}
          <Link href="https://developers.google.com/community/gdsc">
            Google Developer Students
          </Link>{' '}
          and an part members&nbsp;
          <Link href="https://codelabs.unikom.ac.id/">
            Unikom Codelabs.
          </Link>{' '}
          Apart on that he is now an freelancer for designing or building an
          apps.{'\n'}
          <Link
            href="https://drive.google.com/file/d/1klWT2Hf-lhr4Y0JgfuuGUxiRKOu2XS3D/view?usp=sharing"
            variant="see-credentials"
          >
            Curiculum Vitae
          </Link>
          .
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading variant="section-title">Experience</Heading>
        <SimpleGrid row={2} pt={3}>
          <BioYear>2022 - present</BioYear>
          <BioDesc color="gray.400" my={1}>
            Studies at Indonesia Computer University{' '}
            <Text as="i">(Undergraduate)</Text>
          </BioDesc>
        </SimpleGrid>
        <SimpleGrid row={2}>
          <BioYear>2021 - present</BioYear>
          <BioDesc color="gray.400" my={1}>
            Became co head-of tech on Google Developer Student Clubs at
            Indonesia Computer University.
          </BioDesc>
        </SimpleGrid>
        <SimpleGrid row={2}>
          <BioYear>2021 - present</BioYear>
          <BioDesc color="gray.400" my={1}>
            An Front-End Developer at Unikom Codelabs.
          </BioDesc>
        </SimpleGrid>
        <SimpleGrid row={2}>
          <BioYear>2022 - present</BioYear>
          <BioDesc color="gray.400" my={1}>
            An Front-End Engineer Intern at{' '}
            <Link href="https://www.vidio.com/">Vidio.com</Link>.
          </BioDesc>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Certificates
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={5} py={5}>
          <GridItem
            href="https://www.dicoding.com/certificates/53XEE8G1YXRN"
            title="Belajar Android Jetpack Pro"
            thumbnail={certificate1}
          >
            <Link variant="see-credentials">See Credentials</Link>
          </GridItem>
          <GridItem
            href="#"
            title="Full Stack Javascript Developer"
            thumbnail={certificate2}
          >
            <Link variant="see-credentials">See Credentials</Link>
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in touch
        </Heading>
        <List py={5}>
          <ListItem>
            <Link href="https://github.com/maulanaadil" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @maulanaadil
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/maulanaadill" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @maulanaadill
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/maulanaadil/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @maulanaadil
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://dribbble.com/maulanaadill" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDribbble} />}
              >
                @maulnad
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
