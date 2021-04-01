import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function Home({data}) {
  return(
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />

      <main>
        <div className="card-body">
          <h1>Pagina non trovata</h1>
          <div>
            <p>Scusami!</p>
            <p>Probabilmente la pagina che stavi cercando è stata spostata o eliminata.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`