import React from "react"
import { action } from "@storybook/addon-actions"
import Heading from "../src/components/typography/heading"
import CopyComponent from "../src/components/typography/copy"
import Box from "../src/components/box"
import HeaderComponent from "../src/components/header"

export default {
  title: "Header",
  component: Header,
}

export const Header = () => <HeaderComponent />

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
