import styled from "@emotion/styled"
import React from "react"
import {
  applyGutters,
  applyMaxWidth,
  applyNumCols,
  applySideMargins,
} from "./utils"

const getGridProperty = (input, theme, property) => {
  if (typeof input === "number" || typeof input === "string") {
    return {
      singleValue: input,
    }
  }

  if (typeof input === "object") {
    if (!Array.isArray(input)) {
      // Input is an object.
      const singleValue =
        property === "cols"
          ? Math.max(...Object.keys(input).map(width => input[width]))
          : undefined

      return {
        map: input,
        singleValue,
      }
    } else {
      // Input is an array.
      const breakpoints = theme.breakpoints
      const breakpointsWidths = Object.keys(breakpoints).map(
        bpName => breakpoints[bpName]
      )
      const map = {}

      breakpointsWidths.forEach((currWidth, idx) => {
        const currItem = input[idx]
        if (currItem != null) {
          map[currWidth] = currItem
        }
      })

      return {
        map,
        singleValue: property === "cols" ? Math.max(...input) : undefined,
      }
    }
  }
}

const Col = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.2;
  background: #ff0000;
`

const Grid = styled.div`
  display: grid;
  box-sizing: border-box;
  margin: 0 auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  z-index: 1000;
  pointer-events: none;
  grid-template-columns: repeat(${props => props.cols.singleValue}, 1fr);

  /* Side Margins */
  ${props =>
    props.margin &&
    props.margin.singleValue &&
    `
    padding: 0 ${props.margin.singleValue};
  `};
  ${props =>
    props.margin &&
    props.margin.map &&
    `
    ${applySideMargins(props.margin.map)}
  `};

  /* Gutters */
  ${props =>
    props.gutter &&
    props.gutter.singleValue &&
    `
    column-gap: ${props.gutter.singleValue};
  `};
  ${props =>
    props.gutter &&
    props.gutter.map &&
    `
    ${applyGutters(props.gutter.map)}
  `};

  /* Columns */
  ${props =>
    props.cols &&
    props.cols.map &&
    `
    ${applyNumCols(props.cols.map)}
  `};

  /* Max-Width */
  ${props =>
    props.maxWidth &&
    props.maxWidth.singleValue &&
    `
    max-width: ${props.maxWidth.singleValue};
  `};
  ${props =>
    props.maxWidth &&
    props.maxWidth.map &&
    `
    ${applyMaxWidth(props.maxWidth.map)}
  `};
`

const GridDebugger = ({ theme, gutter, margin, maxWidth, numCols }) => {
  const marginObject = getGridProperty(margin, theme)

  const guttersObject = getGridProperty(gutter, theme)
  const cols = getGridProperty(numCols, theme, "cols")
  const maxWidthObj = maxWidth
    ? getGridProperty(maxWidth, theme)
    : { singleValue: "none" }

  return (
    <Grid
      margin={marginObject}
      gutter={guttersObject}
      cols={cols}
      maxWidth={maxWidthObj}
    >
      {Array.from(new Array(cols.singleValue)).map((_, idx) => (
        <Col key={idx} />
      ))}
    </Grid>
  )
}

export default GridDebugger
