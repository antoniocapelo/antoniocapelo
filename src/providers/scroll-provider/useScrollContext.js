import { useContext } from "react"
import { ScrollContext } from "./ScrollProvider"
const useScrollContext = () => {
  return useContext(ScrollContext)
}

export default useScrollContext
