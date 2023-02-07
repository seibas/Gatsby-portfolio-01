import React from 'react'
import { graphql } from "gatsby"
import BannerImageFluid from "../components/BannerFluid"
import  indexStyles from "../pages/index.module.css"
import Layout from '../components/Layout'
import { Link } from "gatsby"



const index = ({ data }) => {
  return (
    
    <Layout>
      
    <h1 style={{ display: `block`, fontSize: `2.0rem`, lineHeight: '3.5rem', marginTop:`2rem` }}><span> 👋</span>Hello, I am a web developer with a passion for creating intuitive, engaging, and accessible websites. With experience in HTML, CSS, JavaScript, and several frameworks and libraries, I am equipped to develop and maintain dynamic and responsive web applications. My goal is to deliver exceptional user experiences and help businesses establish a strong online presence. Let's work together to bring your vision to life.
     </h1>
       <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="Nature" />     
     
       <div className= {indexStyles.cardContainer}>

       <Link 
              to="https://codepen.io/Seibas/full/moPomL">
<div className= { indexStyles.postCard }><p>How to create Digital Clock with CSS and JavaScript</p></div></Link>
<Link 
              to="https://codepen.io/Seibas/project/full/AyaavW">
<div className= { indexStyles.postCard }><p>CodePen Home
FCC.PortfolioSeba</p></div></Link>


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
