import { useContext } from "react"
import { WindowSizeContext } from "./WindowSizeProvider"

export default () => {
  return useContext(WindowSizeContext)
}
