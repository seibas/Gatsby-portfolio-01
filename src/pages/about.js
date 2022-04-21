import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import BannerImageFluid from "../components/BannerFluid"




const about = ({ data }) => {
    return (
     
        <Layout>
          
            <h1>About</h1>
            <h2 style={{ display: `block`, fontSize: `2.0rem`, lineHeight: '1.5rem', marginTop:`4rem`, textAlign:`left`, marginBottom:`-4rem` }}> Hey, I'm Sebastiano.</h2>
            <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="" />
       <p className= { "laptopTitle" }>{data.site.siteMetadata.author} &  Leo.</p>
       <h2  style={{ display: `block`, fontSize: `2.0rem`, lineHeight: '3.5rem ', marginTop:`0rem`, textAlign:`left`, marginBottom:`4rem` }}>I am a self-taught web developer, from Italy now living in Japan Tokyo with my lovely wife and two beautiful kids Leo and Emma. I am 46 years old ho never did anything about programming until 2 years ago.
I use HTML, CSS, and JavaScript my focus at the moment is react.js, Node , Gatsby
</h2>
        </Layout>
    )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        
        author
      }
    }
    file(relativePath: { eq: "images/seba.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
