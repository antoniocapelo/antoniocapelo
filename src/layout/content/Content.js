import styled from '@emotion/styled'
import { typography, space, color } from 'styled-system'
import theme from '../../theme'

const Content = styled('div')`
    max-width: ${theme.breakpoints.lg};
    min-width: ${320}px;
    padding: 0 ${theme.space[7]}px;
    margin: 0 auto;
    ${color}
`

export default Content

