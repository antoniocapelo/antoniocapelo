import React from "react"
import Box from "../src/components/box"
import Copy from "../src/components/typography/copy"
import theme from "../src/theme"

export default {
  title: "Carousel",
  component: Carousel,
}

const spacing = theme.space[6]

const obj = {
  target: "",
  label: "ye",
}

const items = [obj, obj, obj, obj, obj, obj, obj, obj]

const CarouselDemo = ({ rtl }) => {
  return (
    <Carousel spacing={spacing} rtl={rtl}>
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
  )
}

export const Carousel = () => <CarouselDemo />
export const CarouselRtl = () => <CarouselDemo rtl />
