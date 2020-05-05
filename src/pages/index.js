import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from "../components/box"
import Heading from "../components/typography/heading"
import FullHeight from "../components/full-height"
import Content from "../layout/content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content fullHeight bg="primary">
      <Box>
        <Box py="2" />
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </Box>
    </Content>

    <Box>
      <Box py="2" />
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </Box>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
