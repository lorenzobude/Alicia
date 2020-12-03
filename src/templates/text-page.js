import React from "react"
import Layout from "../components/Layout"
import CallToAction from "../components/CallToAction"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

export default function Home({data}) {
  const node = data.markdownRemark

  return(
    <Layout>
      <SEO title={`${node.frontmatter.title} – ${data.site.siteMetadata.title}`} description={node.frontmatter.summary} />

      <main className={node.frontmatter.color}>
        <div className="card-body">
          <h1>{node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          {node.fields.slug !== "/contatti/" && <CallToAction hasMarginTop={true} />}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        color
        type
        summary
      }
    }
  }
`