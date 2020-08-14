import React from "react"
import {graphql} from 'gatsby';
import CardTemplate from '../template/cardTemplate';
export default ({data}) =>{
  console.log(data)
  return (
    <>
   {data. allMarkdownRemark.edges.map(({node})=>{
     return <>
     <h1>{node.frontmatter.title}</h1><a href={node.frontmatter.path}>hello</a>
     </>
   })}
   <CardTemplate></CardTemplate>
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
          }
        }
      }
    }
  }
`