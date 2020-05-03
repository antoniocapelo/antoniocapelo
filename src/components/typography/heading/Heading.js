import React from "react"
import styled from '@emotion/styled'
import { typography, space, color } from 'styled-system'


const Heading1 = styled("h1")`
  ${typography}
  ${space}
  ${color}
  transform: translateY(${0.11}em);
  &:before {
    content: "";
    margin-top: -${0.48}em;
    display: block;
    height: 0;
  }
`
const Heading2 = Heading1.withComponent('h2')
const Heading3 = Heading1.withComponent('h3')

const Heading4 = styled("h4")`
  ${typography}
  ${space}
  ${color}
  text-transform: uppercase;
  transform: translateY(${0.1}em);
  &:before {
    content: "";
    margin-top: -${0.46}em;
    display: block;
    height: 0;
  }
`

const Heading5 = Heading4.withComponent('h5')
const Heading6 = Heading4.withComponent('h6')


const Heading = ({level = 1, fontFamily = 'heading', ...props}) => {
    if (level === 1) {
        return <Heading1 fontSize="4" m="0" {...props} />
    }
    if (level === 2) {
        return <Heading2 fontSize="3" m="0" {...props} />
    }
    if (level === 3) {
        return <Heading3 fontSize="2" m="0" {...props} />
    }
    if (level === 4) {
        return <Heading4 fontSize="0" m="0" {...props} />
    }
    if (level === 5) {
        return <Heading5 fontSize="0" m="0" {...props} />
    }
    if (level === 5) {
        return <Heading5 fontSize="0" m="0" {...props} />
    }
    if (level === 6) {
        return <Heading5 fontSize="0" m="0" {...props} />
    }
    return null
}

export default Heading

