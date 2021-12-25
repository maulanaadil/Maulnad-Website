import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Build by{' '}
      <Link href="https://www.instagram.com/maulanaadill/">Maulnad</Link>.✌️
    </Box>
  )
}

export default Footer
