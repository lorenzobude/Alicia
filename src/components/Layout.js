import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import AboutCard from "./AboutCard"
import BookCard from "./BookCard"
import Footer from "./Footer"

import favicon from "../images/favicon.png"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="it" />
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap" />
      </Helmet>

      <Header />

      <div className="container main-container">
        <section className="page">
          {children}
        </section>
      
        <aside className="site-aside">
          <AboutCard />
          <BookCard />          
        </aside>
      </div>

      <Footer />
    </>
  )
}