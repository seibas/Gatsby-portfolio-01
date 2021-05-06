// src/pages/event-layout.js
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import BannerImageFluid from "../components/BannerFluid"
import eventStyles from "../templates/event.module.css"




export default ({ data: { mdx } }) => {
  return (
    <Layout>
    {mdx.frontmatter.banner && (
       <BannerImageFluid fluid={mdx.frontmatter.banner.childImageSharp.fluid }alt="Banner Image" />)}
     <div className={ eventStyles.eventContainer }>
      <h3>Name: {mdx.frontmatter.title}</h3>
      <h3>Date: {mdx.frontmatter.date}</h3>
      <h3>Category: {mdx.frontmatter.category}</h3>
        
      <MDXRenderer>{mdx.body}</MDXRenderer></div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query EventPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        title
        category
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
`
