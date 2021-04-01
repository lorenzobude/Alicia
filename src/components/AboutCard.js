import React from "react"
import { Link } from "gatsby"

import imgLicia from "../images/licia.jpg"

export default function AboutCard() {
  return (
    <div className="card">
      <Link to="/chi-sono">
        <figure>
          <img src={imgLicia} alt="Licia Atzori" />
        </figure>
      </Link>
      <div className="card-body">
        <div className="small-title">Chi sono</div>
        <p>
          Ciò che amo di più è vedere riaccendersi lo sguardo ed il sorriso nelle persone che si rivolgono a me.
        </p>
        <Link to="/chi-sono" className="read-all">Di più su di me</Link>
      </div>
    </div>
  )
}