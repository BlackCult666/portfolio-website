import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cards from "../components/cards"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Cards />
    </Layout>
  )
} 

export const Title = () => <title>Index Page</title>

export default IndexPage