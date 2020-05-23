import { useContext } from "react"
import { ScrollContext } from "./ScrollProvider"

export default () => {
  return useContext(ScrollContext)
}
