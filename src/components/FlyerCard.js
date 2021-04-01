import React from "react"
import { Link } from "gatsby"

import imgBook from "../images/volantino.jpg"

export default function FlyerCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="small-title">Eventi e iniziative</div>
        <p>
          <Link to="/eventi" className="read-all">
            <figure>
              <img src={imgBook} alt="Volantino eventi" />
            </figure>
          </Link>
        </p>
        <Link to="/eventi" className="read-all">Scopri tutti gli eventi</Link>
      </div>
    </div>
  )
}