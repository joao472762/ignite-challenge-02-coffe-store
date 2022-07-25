import {theme} from '../theme/styles/default'

import 'styled-components'
type Theme = typeof theme

declare module 'styled-components'{
    interface DefaultTheme extends Theme {}
}