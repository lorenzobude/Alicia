import React from "react"
import Layout from "../components/Layout"
import Slideshow from "../components/Slideshow"
import SEO from "../components/SEO"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({data}) {
  return(
    <Layout>
      <SEO title={`${data.site.siteMetadata.title} – ${data.site.siteMetadata.description}`} description={data.site.siteMetadata.description} />

      <Slideshow />

      <main>
        <div className="card-body">
          <h1>Sei in un periodo di crisi nella tua vita? <span>😪</span></h1>            
          <p>
            I cambiamenti e le situazioni transitorie infondono insicurezza perchè ci fanno muovere in terre scnosciute. <strong>Paura, ansia, stress psico-fisico e smarrimento</strong> fanno capolino.
            A volte con una certa insistenza anche notturna.
          </p>
          <p>
            Spesso per avere un po' di sollievo ci si affida ai consigli di familiari ed amici che ci forniscono delle efficaci ricette da seguire secondo il loro carattere e la loro visione del mondo.
          </p>
          <p class="lead">  
            Ci si sente troppo complicati, incapaci, a volte incompresi.
          </p>
          <p>
            Ma soprattutto molto spesso seguire tali consigli ci porta ancora più fuori rotta con un conseguente <strong>aumento della frustrazione</strong>.
            A volte l'affetto e le buone intenzioni di chi ci sta intorno non ci bastano, non ci aiutano.
          </p>
          <p class="lead">
            Ma non siamo sbagliati.
          </p>
          <p>
            Abbiamo soltanto bisogno di una mano esperta per trovare il bandolo della matassa e far ripartire tutto il sistema.
          </p>
          <h2>Il mio metodo</h2>
          <p>
            Il <strong>coaching integrato</strong> è un approccio dialogico che si intreccia a tecniche energetiche come il Reiki, il massaggio energetico, la visualizzazione creativa.
          </p>
          <p>
            Il suo scopo è di sostenere la persona da tutti i punti di vista mentale, emozionale, energetico-corporeo e spirituale.
          </p>
          <p>
            In un breve ciclo di sedute il coachee acquista chiarezza, equilibrio emotivo, nuova percezione di sé e dei suoi obiettivi ed anche la forza e la determinazione necessari a raggiungerli per conquistare un miglior stato di benessere.
          </p>
          <p class="lead">
            Ecco come posso aiutarti:
          </p>

          <div className="site-services">
            {data.allMarkdownRemark.edges.map(({node}) => (

              <div key={node.id} className={`service ${node.frontmatter.color}`}>
                <Link to={node.fields.slug} className="teaser-img">
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                </Link>
                <div className="small-title">{node.frontmatter.title}</div>
                <p>{node.frontmatter.summary}</p>
                <Link to={node.fields.slug} className="read-all">Leggi tutto</Link>
              </div>
              
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] }
      filter: { frontmatter: {type: {eq: "Service"}} }
    ) {    
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            summary
            order
            color
          }
        }
      }
    }
  }
`