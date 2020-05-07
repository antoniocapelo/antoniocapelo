import React from "react"
import Box from "../components/box"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/typography/heading"
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
        <DraggableArea>
          <Box py="2">
            <Heading level={2}>hey hey</Heading>
            <Heading level={2}>hey hey</Heading>
            <Heading level={2}>hey hey</Heading>
          </Box>
        </DraggableArea>
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
