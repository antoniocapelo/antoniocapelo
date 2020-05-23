import React from "react"
import Box from "../components/box"
import Carousel from "../components/carousel/Carousel"
import About from "../components/homepage/about"
import Intro from "../components/homepage/intro"
import Layout from "../components/layout"
import SectionTitle from "../components/section-title/SectionTitle"
import SEO from "../components/seo"
import Copy from "../components/typography/copy"
import Heading from "../components/typography/heading"
import Content from "../layout/content"
import theme from "../theme"

const spacing = theme.space[6]

const obj = {
  target: "",
  label: "ye",
}

const items = [obj, obj, obj, obj, obj, obj, obj, obj]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Box bg="primary" pt="9">
      <Carousel spacing={spacing}>
        {items.map(({ target }, idx) => (
          <Box bg="dark" width="200px" height="200px" key={`${target}-${idx}`}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Copy light>{idx + 1}</Copy>
            </div>
          </Box>
        ))}
      </Carousel>
      <Box pt="9"></Box>
      <Carousel spacing={spacing} rtl>
        {items.map(({ target }, idx) => (
          <Box bg="dark" width="200px" height="200px" key={`${target}-${idx}`}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Copy light>{idx + 1}</Copy>
            </div>
          </Box>
        ))}
      </Carousel>
    </Box>
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
        <SectionTitle color="primary" textAlign="right">
          Recent work
        </SectionTitle>
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
