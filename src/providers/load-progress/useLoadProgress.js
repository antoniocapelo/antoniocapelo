import { useContext } from "react"
import { LoadProgressContext } from "./LoadProgressProvider"

export default () => {
  return useContext(LoadProgressContext)
}
