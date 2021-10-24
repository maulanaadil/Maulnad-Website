import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioDesc, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Typist from 'react-typist'
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
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Typist>Hello, I&apos;m a front-end developer based in Bandung!</Typist>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Maulana Adil
          </Heading>
          <p>Undergraduate ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/adil.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Adil is a Developer and an Designer. He&apos;s a mobile developer at
          Unikom Codelabs. He love to designing an app or website then slicing
          or develope into an software. He&apos;s studies Information Technology
          at Indonesia Computer University. During his studies, Adil also became
          Core Teams Google Developer Students and an part Members Unikom
          Codelabs. Apart on that he is now an freelancer for designing or
          building an apps.{'\n'}
          <Link href="https://drive.google.com/file/d/1sNI4Y11EJh_0dspRlRaHIIsRSTCISYGG/view?usp=sharing">
            Curiculum Vitae
          </Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              See Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <SimpleGrid row={2}>
          <BioYear>2019 -present</BioYear>
          <BioDesc>
            Studies in college the Bachelor Program in the Graduate School of
            Information Science at Indonesia Computer University
          </BioDesc>
        </SimpleGrid>
        <SimpleGrid row={2}>
          <BioYear>2021 -present</BioYear>
          <BioDesc>
            Became co head-of tech on Google Developer Student Clubs at
            Indonesia Computer University.
          </BioDesc>
        </SimpleGrid>
        <SimpleGrid row={2}>
          <BioYear>2021 -present</BioYear>
          <BioDesc>An Front-End Developer at Unikom Codelabs.</BioDesc>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Certificates
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={5}>
          <GridItem
            href="https://www.dicoding.com/certificates/53XEE8G1YXRN"
            title="Belajar Android Jetpack Pro"
            thumbnail={certificate1}
          >
            <Link>See Credentials</Link>
          </GridItem>
          <GridItem
            href="#"
            title="Full Stack Javascript Developer"
            thumbnail={certificate2}
          >
            <Link>See Credentials</Link>
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in touch
        </Heading>
        <List>
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
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
