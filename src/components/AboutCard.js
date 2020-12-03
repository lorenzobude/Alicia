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
          Opero a <strong>Bologna</strong> come <strong>Life Coach</strong> (secondo il metodo Resonance) e <strong>Reikista</strong> (secondo la scuola di Mikao Usui).
          Nasco come insegnante di scuola dell'infanzia nella quale opero da vent'anni.
          Mi hanno sempre affascinata le <strong>tecniche naturali</strong> e la <strong>filosofia orientale</strong> che collega gli squilibri fisici agli stati emotivi ed ai pensieri della persona.
        </p>
        <Link to="/chi-sono" className="read-all">Maggiori informazioni</Link>
      </div>
    </div>
  )
}