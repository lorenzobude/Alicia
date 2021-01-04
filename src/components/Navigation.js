import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import imgBars from "../images/bars.svg"

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___order] }
        filter: { frontmatter: {type: {eq: "Service"}} }
      ) {    
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              navCaption
              order
              color
            }
          }
        }
      }
    }
  `)
  
  const [displayNavigation, setDisplayNavigation] = useState("none")
  
  function toggleNavigation() {
    setDisplayNavigation(prevDisplayNavigation => prevDisplayNavigation == "none" ? "block" : "none")
  }

  return (
    <>
      <button onClick={toggleNavigation}>
        <img src={imgBars} alt="Icona menù" />
      </button>
      <nav style={{display: displayNavigation}}>
        <ul>
          {data.allMarkdownRemark.edges.map(({node}) => (
            <li key={node.id}>
              <Link to={node.fields.slug} className={`nav-link ${node.frontmatter.color}`} onClick={toggleNavigation}>
                {node.frontmatter.navCaption}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}