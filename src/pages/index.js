import React from "react"
import About from "../components/homepage/about"
import Contact from "../components/homepage/contact"
import Intro from "../components/homepage/intro"
import Music from "../components/homepage/music/Music"
import Projects from "../components/homepage/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    contentfulPage: pageData,
    contentfulWorkExperiences: { items: workExperience },
    contentfulPersonalProjects: { items: personalProjects },
    contentfulMusicList: { items: music },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <About />
      <Projects
        name="experience"
        title="Recent Work"
        subtitle={
          "front-end code at scale / framework-agnostic design systems / WebGL experiences"
        }
        projects={workExperience}
      />
      <Projects
        name="projects"
        title="Talks & other projects"
        subtitle={"conference presentations / personal websites / apps"}
        align="right"
        projects={personalProjects}
      />
      <Music items={music} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    contentfulPage(title: { eq: "Home" }) {
      title
      keywords
    }
    contentfulPersonalProjects {
      items {
        id
        name
        url
        description {
          description
        }
      }
    }
    contentfulWorkExperiences {
      items {
        id
        name
        url
        description {
          description
        }
      }
    }
    contentfulMusicList(name: { eq: "Music List" }) {
      items {
        id
        name
        url
        image {
          id
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
