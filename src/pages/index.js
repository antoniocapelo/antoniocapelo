import React from "react"
import Box from "../components/box"
import Carousel from "../components/carousel/Carousel"
import About from "../components/homepage/about"
import Intro from "../components/homepage/intro"
import Projects from "../components/homepage/projects"
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

const experience = [
  {
    label: "Jumo",
    url: "https://jumo.world",
    description: "Building products for digital financial services",
  },
  {
    label: "yld",
    url: "https://yld.io",
    description: "Providing frontend solutions to clients around the world",
  },
  {
    label: "Moxy",
    url: "https://moxy.studio",
    description: "Creating experiences with JS, CSS and WebGL",
  },
  {
    label: "Mindera",
    url: "https://mindera.com",
    description: "Building robust web and mobile apps for many industries",
  },
  {
    label: "Blip",
    url: "https://blip.pt",
    description: "Developing high-transactional betting products",
  },
]

const personalProjects = [
  {
    label: "8 Bars A Week",
    url: "https://8-bars-a-week.capelo.me/",
    description:
      "Online audio journal where I post new beats on a weekly basis",
  },
  {
    label: "Sanity-driven development",
    url: "https://www.youtube.com/watch?v=JCY1wDGcTCk",
    description:
      "Talk at Tech In Porto about how component-based approach improved front-end development",
  },
  {
    label: "Props Per Minute",
    url: "https://www.youtube.com/watch?v=PEWx_bhqHnM",
    description:
      "Talk on advanced React patterns for making developer lives easier",
  },
  {
    label: "The Case of the Hydra",
    url: "http://the-case-of-the-hydra.capelo.me/",
    description:
      'WebGL website for promoting "The Case of the Hydra" music album from Dissonant Digging',
  },
  {
    label: "Palette",
    url: "http://palete.capelo.me/",
    description:
      'WebGL website for promoting the "Palette" music album from Stereo Tipo',
  },
  {
    label: "Lemongrass",
    url: "http://lemongrass.capelo.me/",
    description:
      'WebGL website for promoting the "Lemongrass" music album from Stereo Tipo',
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Projects
      name="work"
      title="Recent Work"
      subtitle={
        "front-end code at scale / framework-agnostic design systems / WebGL experiences"
      }
      projects={experience}
    />
    <Projects
      name="projects"
      title="Talks & other projects"
      subtitle={"conference presentations / personal websites / apps"}
      align="right"
      projects={personalProjects}
    />
    <Content bg="primary" pt="9" data-scroll-section>
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
    </Content>
    <Content
      fullHeight
      data-scroll-section
      bg="primary"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box py="2" />
        <Heading level={2}>About</Heading>
      </Box>
    </Content>

    <Content
      data-scroll-section
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
      data-scroll-section
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
      data-scroll-section
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
