import React, { useState } from "react"
import HeaderComponent from "../src/components/header"
import ContentComponent from "../src/layout/content"
import Copy from "../src/components/typography/copy"

export default {
  title: "Content",
  component: Content,
}

const ContentDemo1 = () => (
  <ContentComponent>
    <Copy>Some content here</Copy>
  </ContentComponent>
)

const ContentDemo2 = () => (
  <ContentComponent
    fullHeight
    justifyContent="center"
    alignItems="center"
    bg="primary"
  >
    <Copy>Some content here</Copy>
  </ContentComponent>
)

export const Content = () => <ContentDemo1 />
export const ContentFullHeight = () => <ContentDemo2 />
