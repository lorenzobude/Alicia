import React from "react"

import img1 from "../images/viaggiare.jpg"
import img2 from "../images/felicita.jpg"
import img3 from "../images/insoddisfazione.jpg"

class Slideshow extends React.Component {
  constructor() {
    super()
    this.state = {
      image: null,
      caption: ""
    }
  }

  componentDidMount() {
    const slide = Math.floor(Math.random() * 3) + 1
  
    switch (slide) {
      case 1:
        this.setState({
          image: img1,
          caption: "Non esiste vento favorevole per il marinaio che non sa dove andare..."
        })
        break
      case 2:
        this.setState({
          image: img2,
          caption: "La felicità appare quando mente, corpo ed emozioni sono allineati..."
        })
        break
      case 3:
        this.setState({
          image: img3,
          caption: "L\'insoddisfazione nasce a volte da un bisogno inascoltato, altre volte da chimere che chiamiamo obiettivi..."
        })
        break
    }
  }

  render() {
    return (
      <div className="site-slideshow">
        <figure>
          <img src={this.state.image} alt="Crescita personale" />
          <figcaption>{this.state.caption}</figcaption>
        </figure>
      </div>
    )
  }
}

export default Slideshow