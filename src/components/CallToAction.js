import React from "react"
import { Link } from "gatsby"

export default function CallToAction(props) {
  const style = {
    marginTop: props.hasMarginTop && "1em"
  }

  return (
    <Link to="/contatti" className={`btn btn-${props.style}`} style={style}>
      <span>✉️</span> <span>Contattami</span>
    </Link>
  )
}

CallToAction.defaultProps = {
  style: "primary"
}