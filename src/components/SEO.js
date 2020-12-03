import React from "react"
import { Helmet } from "react-helmet"

export default function SEO(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        {
          name: "description",
          content: props.description
        }
      ]}
    />
  )
}