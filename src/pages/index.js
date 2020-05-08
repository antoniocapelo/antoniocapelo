import React from "react"
import Box from "../components/box"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/typography/heading"
import Copy from "../components/typography/copy"
import Content from "../layout/content"
import DraggableArea from "../components/draggable-area"

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
        <Copy light mt="2">
          <a href="">a link</a>
        </Copy>
      </Box>
    </Content>

    <Content
      p="4"
      fullHeight
      bg="primary"
      id="other-projects"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box py="2" />
        <Heading level={2}>Other projects</Heading>
        <Box
          mt="4"
          mx="auto"
          p="4"
          maxWidth="400px"
          data-draggable
          style={{ border: "1px solid #222" }}
        >
          <Heading level={2}>Area with draggable content</Heading>
        </Box>
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
