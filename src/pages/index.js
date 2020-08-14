import React from "react"
import {graphql} from 'gatsby';
import CardTemplate from '../template/cardTemplate';
export default ({data}) =>{
  console.log(data)
  return (
    <>
   {data. allMarkdownRemark.edges.map(({node})=>{
     return <CardTemplate title={node.frontmatter.title} thumbnail={node.frontmatter.thumbnail} path={node.frontmatter.path} excerpt={node.excerpt} ></CardTemplate>
   })}
 
    </>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            thumbnail 
           
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`