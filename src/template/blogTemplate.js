import React from 'react';
import {Grid,Typography,Button} from '@material-ui/core';
export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const { frontmatter,excerpt } = markdownRemark;
  console.log(excerpt)
  return (
    <>
    <nav style={{background:"dodgerBlue",padding:"10px",color:"white",textAlign:"center"}}>
    <h1>Blogs</h1>
    </nav>
    <Grid container spacing={2} direction="column"  md={6} style={{margin:"10px 30%"}}>
      <Grid item>
        <Typography variant="h4" component="h4">{frontmatter.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{frontmatter.date}</Typography>
      </Grid>
      <Grid item zeroMinWidth md={8}>
      <Typography variant="subtitle2" color="textSecondary" noWrap>by Dilip Kumar</Typography>
    </Grid>
    <Grid item>
        <img src={frontmatter.thumbnail} alt={frontmatter.title}></img>
    </Grid>
    <Grid item>
    <Typography variant="body1" color="textSecondary">{excerpt}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle2" color="textSecondary">Thankyou for reading</Typography>
    </Grid>
    </Grid>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        
      }
    }
  }
`;