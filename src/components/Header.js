import React from "react"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import CallToAction from "./CallToAction"

import imgLogo from "../images/logo.svg"

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Link to="/" className="site-logo">
              <img src={imgLogo} alt="Licia Atzori – Aiuto psicologico, Reiki, Life Coach" />
            </Link>

            <div className="site-navigation">
              <Navigation />
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}