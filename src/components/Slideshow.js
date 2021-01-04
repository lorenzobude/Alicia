import React, {useState, useEffect} from "react"

import img1 from "../images/viaggiare.jpg"
import img2 from "../images/felicita.jpg"
import img3 from "../images/insoddisfazione.jpg"

function Slideshow() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState("")

  useEffect(() => {
    const slide = Math.floor(Math.random() * 3) + 1
  
    switch (slide) {
      case 1:
        setImage(img1)
        setCaption("Non esiste vento favorevole per il marinaio che non sa dove andare...")
        break
      case 2:
        setImage(img2)
        setCaption("La felicità appare quando mente, corpo ed emozioni sono allineati...")
        break
      case 3:
        setImage(img3)
        setCaption("L\'insoddisfazione nasce a volte da un bisogno inascoltato, altre volte da chimere che chiamiamo obiettivi...")
        break
    }
  }, [])

  return (
    <div className="site-slideshow">
      <figure>
        <img src={image} alt="Crescita personale" />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  )
}

export default Slideshow