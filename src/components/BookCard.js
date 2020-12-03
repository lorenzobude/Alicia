import React from "react"

import imgBook from "../images/manuale-amore.jpg"

export default function AboutCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="small-title">Il mio libro</div>
        <p>Una divertente raccolta di <strong>consigli personalizzati per Lui e per Lei</strong> per gestire in modo efficace la vita di coppia e affrontare al meglio situazioni di emergenza emotiva.</p>
        <a href="https://www.amazon.it/Manuale-pronto-soccorso-amore-Atzori/dp/8892502670" target="_blank" className="book">
          <figure>
            <img src={imgBook} alt="Manuale di Pronto Soccorso in Amore" />
          </figure>
        </a>
      </div>
    </div>
  )
}