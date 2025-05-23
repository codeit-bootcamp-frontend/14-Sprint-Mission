import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PrimaryBlue: {
        100: string
        200: string
        300: string
      }
      SecondaryGray: {
        50: string
        100: string
        200: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      white: string
      black: string
      error: string
    }
    Typography: {
      [key: number]: {
        fontSize: string
        lineHeight: string
      }
    }
  }
}
