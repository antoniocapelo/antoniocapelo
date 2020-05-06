/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback } from "react"
import useEventListener from "../hooks/useEventListener"
import GridDebugger from "../layout/grid-debugger"
import Header from "./header/"
import { color, space, typography, layout } from "styled-system"
import theme from "../theme"
import "./layout.css"

const Main = styled("main")`
  ${space}
`

const Layout = ({ children }) => {
  const [showDebugger, setShowDebugger] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handler = useCallback(
    event => {
      // Update coordinates
      if (event.ctrlKey && event.key === "l") {
        setShowDebugger(!showDebugger)
      }
    },
    [setShowDebugger, showDebugger]
  )
  useEventListener("keydown", handler)

  return (
    <>
      {showDebugger && (
        <GridDebugger
          show
          maxWidth={theme.maxContentWidth}
          theme={theme}
          numCols={{ 320: 6, 769: 12 }}
          gutter={{ 320: "24px" }}
          margin={{ 320: "32px", 769: "48px" }}
        />
      )}
      <Header />
      <Main mt={["0px", "0px", theme.layout.headerHeight]}>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
