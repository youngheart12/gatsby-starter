import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import CardTemplate from "../template/cardTemplate"
export default ({ data }) => {
 
  return (
    <Grid container spacing={2} justify="center" alignItems="center" style={{margin:"0px 20px"}}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Grid item md={4}>
            <CardTemplate
              title={node.frontmatter.title}
              thumbnail={node.frontmatter.thumbnail}
              path={node.frontmatter.path}
              excerpt={node.excerpt}
            ></CardTemplate>
          </Grid>
        )
      })}
    </Grid>
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
