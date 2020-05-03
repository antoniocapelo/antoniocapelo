import styled from '@emotion/styled'
import { typography, space, color } from 'styled-system'
import theme from '../../theme'

const Content = styled('div')`
    max-width: ${theme.breakpoints.lg};
    min-width: ${320}px;
    margin: 0 auto;
    ${typography}
    ${space}
    ${color}
`

export default Content

