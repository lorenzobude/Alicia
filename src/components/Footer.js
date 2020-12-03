import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <footer className="site-footer">
      <div className="container">
        &copy; {data.site.siteMetadata.title} – {data.site.siteMetadata.description}. Tutti i diritti sono riservati.
      </div>
    </footer>
  )
}