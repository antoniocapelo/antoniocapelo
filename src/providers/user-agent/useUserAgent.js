import { useContext } from "react"
import { UserAgentContext } from "./UserAgentProvider"

export default () => {
  return useContext(UserAgentContext)
}
