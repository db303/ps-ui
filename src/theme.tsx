import { extendTheme, type ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const radii = {
  md: 'none'
}

const colors = { mycolor: "#F39C12" }

const shadows = {
  outline: '0 0 0 3px var(--chakra-colors-mycolor-500)',
};

const theme = extendTheme({
  fonts,
  breakpoints,
  radii,
  config,
  colors,
  shadows,
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'white',
        errorBorderColor: 'crimson'
      },
    },
    FormErrorMessage: {
      defaultProps: {
        color: 'crimson'
      }
    }
  }
})



export default theme
