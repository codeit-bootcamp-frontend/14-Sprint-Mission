import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PrimaryBlue: { [key: number]: string }
      SecondaryGray: { [key: number]: string }
      white: string
      black: string
      error: string
    }
    Typography: {
      [key: number]: {
        fontSize: string
        lineHeight: string
        letterSpacing?: string
      }
    }
    ButtonSize: {
      [key: number]: {
        height: string
        fontSize: string
        fontWeight: number
        padding: string
        borderRadius: string
      }
    }
  }
}
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     Typography: {
//       [key: number]: {
//         fontSize: string
//         lineHeight: string
//         letterSpacing?: string
//       }
//     }
//     colors: {
//       PrimaryBlue: { [key: number]: string }
//       SecondaryGray: { [key: number]: string }
//     }
//   }
// }
