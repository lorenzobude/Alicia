import React from "react"

import img1 from "../images/viaggiare.jpg"
import img2 from "../images/felicita.jpg"
import img3 from "../images/insoddisfazione.jpg"

export default function Slideshow() {
  const slide = Math.floor(Math.random() * 3) + 1
  let image = ""
  let caption = ""

  switch (slide) {
    case 1:
      image = img1
      caption = "Non esiste vento favorevole per il marinaio che non sa dove andare..."
      break
    case 2:
      image = img2
      caption = "La felicità appare quando mente, corpo ed emozioni sono allineati..."
      break
    case 3:
      image = img3
      caption = "L\'insoddisfazione nasce a volte da un bisogno inascoltato, altre volte da chimere che chiamiamo obiettivi..."
      break
  }

  return (
    <div className="site-slideshow">
      <figure>
        <img src={image} alt="Crescita personale" />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  )
}