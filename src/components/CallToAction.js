import React from "react"
import { Link } from "gatsby"

import imgLogo from "../images/envelope.svg"

export default function CallToAction(props) {
  const style = {
    marginTop: props.hasMarginTop && "1em"
  }

  return (
    <Link to="/contatti" className={`btn btn-${props.style}`} style={style}>
      <img src={imgLogo} className="icon" alt="Envelope" /> <span className="text">Contattami</span>
    </Link>
  )
}

CallToAction.defaultProps = {
  style: "primary"
}