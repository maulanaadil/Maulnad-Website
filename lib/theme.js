import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/inter'
import '@fontsource/lusitana'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FCFCFC', '#161616')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 20,
        textDecorationColor: '#e2e2e2',
        textDecorationThickness: 1,
        marginTop: 3,
        marginBottom: 4
      },
      '404-title': {
        fontSize: 60
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#000', '#EDEDED')(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'see-credentials': props => ({
        color: mode('#3182CE', '#FBD38D')(props),
        textUnderlineOffset: 5
      })
    }
  },
  Text: {
    variants: {
      'missing-desc': props => ({
        fontSize: 15,
        marginTop: 5,
        color: mode('#BABCC0', '#606060')(props)
      })
    }
  }
}

const fonts = {
  heading: 'lusitana',
  body: 'Inter'
}

const colors = {
  activeGrey: '#F2F2F2',
  gray: {
    400: '#6E6E6E'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
