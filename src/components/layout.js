/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import styled from "@emotion/styled"
// import { graphql, useStaticQuery } from "gatsby"
import "locomotive-scroll/dist/locomotive-scroll.css"
import PropTypes from "prop-types"
import React, { useCallback, useState } from "react"
import { space } from "styled-system"
import useEventListener from "../hooks/useEventListener"
import GridDebugger from "../layout/grid-debugger"
import theme from "../theme"
import Cursor from "./cursor"
import Header from "./header/"
import "./layout.css"

const Main = styled("main")`
  ${space}
`

function HandleGridDebuggerHotkey(setShowDebugger, showDebugger) {
  const handler = useCallback(
    event => {
      // Update coordinates
      if (event.ctrlKey && event.key === "g") {
        setShowDebugger(!showDebugger)
      }
    },
    [setShowDebugger, showDebugger]
  )
  useEventListener("keydown", handler)
}

const Layout = ({ children }) => {
  const [showDebugger, setShowDebugger] = useState(false)
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  HandleGridDebuggerHotkey(setShowDebugger, showDebugger)

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
      <Cursor />
      <Header />
      <Main mt={["0px", "0px", theme.layout.headerHeight]}>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
