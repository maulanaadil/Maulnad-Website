import Link from 'next/link'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }

  img {
    width: 30px;
    height: auto;
    padding-right: 5px;
  }
`

const Logo = () => {
  const animojiImg = `/images/animoji.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={animojiImg} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={4}
          >
            Maulnad
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
