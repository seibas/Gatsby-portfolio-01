import React from 'react'
import { graphql } from "gatsby"
import BannerImageFluid from "../components/BannerFluid"
import  indexStyles from "../pages/index.module.css"
import Layout from '../components/Layout'
import { Link } from "gatsby"



const index = ({ data }) => {
  return (
    
    <Layout>
      
    <h1 style={{ display: `block`, fontSize: `2.0rem`, lineHeight: '3.5rem', marginTop:`2rem` }}><span> 👋</span> Hey, I'm Beba.
I'm here to learn to be a better web developer.
I'm passionate about HTML, CSS and JavaScript.

If you like please take a tour here and  maybe you can find something interesting thanks!!</h1>

     
       <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="Nature" />     
      
       <div className= {indexStyles.cardContainer}>

       <Link 
              to="/">
<div className= { indexStyles.postCard }>card 1</div></Link>


       </div>
   </Layout>
  )
}





export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/Leo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



export default index
