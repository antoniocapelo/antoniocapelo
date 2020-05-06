import { useContext } from "react"
import { MousePositionContext } from "./MousePositionProvider"

export default () => {
  return useContext(MousePositionContext)
}
