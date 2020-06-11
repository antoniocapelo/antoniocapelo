import styled from "@emotion/styled"
import React from "react"
import Content from "../../../layout/content"
import theme from "../../../theme"
import Box from "../../box"
import Carousel from "../../carousel"
import CoverImage from "../../CoverImage"
import SectionTitle from "../../section-title/SectionTitle"

const spacing = theme.space[6]

const obj = {
  target: "",
  label: "ye",
}

const StyledCover = styled(CoverImage)`
  height: "100%";
  filter: brightness(0.8) contrast(2.2) saturate(0.2);
  transition: filter ${theme.transitions.durations.fast}ms
    ${theme.transitions.easings.out};

  &:hover {
    filter: none;
  }

  body.mousedown & {
    filter: brightness(0.8) contrast(2.2) saturate(0.2);
  }

  img,
  picture {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`

const items = [obj, obj, obj, obj, obj, obj, obj, obj]
const Music = props => {
  return (
    <Content py={[6, 8, 9]} data-scroll-section id="music" bg="subtle">
      <SectionTitle color="dark" mb={["4", "6", "7"]}>
        Music
      </SectionTitle>

      <Carousel spacing={spacing}>
        {items.map(({ target }, idx) => (
          <Box bg="dark" width="400px" height="400px" key={`${target}-${idx}`}>
            <StyledCover />
          </Box>
        ))}
      </Carousel>
    </Content>
  )
}

export default Music
