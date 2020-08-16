import React from "react"
import Layout from "../components/layout"
import Loader from "../components/loader"
import Copy from "../components/typography/copy"

const SecondPage = () => (
  <Layout>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Copy color="primary">some content</Copy>
    </div>
    <Loader />
  </Layout>
)

export default SecondPage
