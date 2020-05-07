/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import AppProviders from "./src/providers/app-providers/AppProviders"

export const wrapRootElement = ({ element }) => (
  <AppProviders>{element}</AppProviders>
)
