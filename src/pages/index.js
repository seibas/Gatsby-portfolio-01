import React from 'react'
import { graphql } from "gatsby"
import BannerImageFluid from "../components/BannerFluid"
import  indexStyles from "../pages/index.module.css"
import Layout from '../components/Layout'
import { Link } from "gatsby"



const index = ({ data }) => {
  return (
    
    <Layout>
      
    <h1 style={{ display: `block`, fontSize: `2.6rem`, lineHeight: '3.5rem' }}>WELCOME TO CODING BLOG BEBA<span>✨</span></h1>

     
       <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="Nature" />     
       <p className= { indexStyles.natureTitle }>{data.site.siteMetadata.title}✨</p>
       <div className= {indexStyles.cardContainer}>

       <Link 
              to="/">
<div className= { indexStyles.postCard }>card 1</div></Link>

<div className= { indexStyles.postCard }>card 2</div>
<div className= { indexStyles.postCard }>card 3</div>
<div className= { indexStyles.postCard }>card 4</div>
<div className= { indexStyles.postCard }>card 5</div>
<div className= { indexStyles.postCard }>card 6</div>
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
