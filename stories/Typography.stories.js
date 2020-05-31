import React from "react"
import Box from "../src/components/box"
import SectionTitle from "../src/components/section-title"
import CopyComponent from "../src/components/typography/copy"
import Heading from "../src/components/typography/heading"

export default {
  title: "Typography",
  component: Heading,
}

export const Headings = () => (
  <Box py="4">
    <Heading pb="4" level={1}>
      Heading level 1
    </Heading>
    <Heading pb="4" level={2}>
      Heading level 2
    </Heading>
    <Heading pb="4" level={3}>
      Heading level 3
    </Heading>
    <Heading pb="4" level={4}>
      Heading level 4
    </Heading>
    <Heading pb="4" level={5}>
      Heading level 5
    </Heading>
    <Heading pb="4" level={6}>
      Heading level 6
    </Heading>
  </Box>
)

export const Copy = () => (
  <Box py="4" width={400}>
    <CopyComponent py="4">Copy text</CopyComponent>
    <CopyComponent pb="4" secondary>
      Copy text - secondary variant
    </CopyComponent>
    <CopyComponent pb="4" light>
      Light Copy text
    </CopyComponent>
  </Box>
)

export const sectionTitle = () => (
  <Box py="4">
    <SectionTitle>Title 1</SectionTitle>
    <SectionTitle>Title 2</SectionTitle>
    <SectionTitle>Title 3</SectionTitle>
  </Box>
)

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
