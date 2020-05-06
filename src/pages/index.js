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
    <Content
      fullHeight
      bg="primary"
      id="about"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box py="2" />
        <Heading level={2}>About</Heading>
      </Box>
    </Content>

    <Content
      fullHeight
      bg="dark"
      justifyContent="center"
      alignItems="center"
      id="experience"
    >
      <Box>
        <Box py="2" />
        <Heading color="primary" level={2}>
          Experience
        </Heading>
      </Box>
    </Content>

    <Content
      fullHeight
      bg="primary"
      id="other-projects"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box py="2" />
        <Heading level={2}>Other projects</Heading>
      </Box>
    </Content>

    <Content
      fullHeight
      bg="dark"
      justifyContent="center"
      alignItems="center"
      id="contact"
    >
      <Box>
        <Box py="2" />
        <Heading color="primary" level={2}>
          Contacts
        </Heading>
      </Box>
    </Content>
  </Layout>
)

export default IndexPage
