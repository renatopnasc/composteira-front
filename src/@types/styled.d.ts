import 'styled-components'
import { theme } from '../styles/themes/default'

type ThemeType = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends ThemeType { }
}
