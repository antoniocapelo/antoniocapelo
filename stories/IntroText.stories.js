import React, { useState } from "react"
import IntroTextComponent from "../src/components/intro-text"

export default {
  title: "Intro Text",
  component: IntroTextComponent,
}

const IntroTextDemo = () => (
  <IntroTextComponent>
    This is some intro text <span>and this is highlighted</span>.
  </IntroTextComponent>
)

export const IntroText = () => <IntroTextDemo />
