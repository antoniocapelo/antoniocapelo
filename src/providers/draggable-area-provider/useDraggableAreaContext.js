import { useContext } from "react"
import { DraggableAreaContext } from "./DraggableAreaProvider"

export default () => {
  return useContext(DraggableAreaContext)
}
