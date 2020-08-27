import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CardTemplate from '../template/cardTemplate';
import {graphql} from 'gatsby'
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function PaginationControlled({data}) {
  let total_pages;
  let itemsPerPage=2;
  const {allMarkdownRemark}=data;
  const{edges}=allMarkdownRemark;
  
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event,value) => {
    setPage(value);
  };
 total_pages=edges.length/2;

 const begin = Math.floor((page - 1) * itemsPerPage);
 const end = Math.floor(begin + itemsPerPage);
 const datatorender=edges.slice(begin,end);

  return (
    <div className={classes.root}>
       <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      style={{ margin: "0px 20px" }}
    >
      {datatorender.map(({ node }) => {
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
      <Typography>Page: {page}</Typography>
      <Pagination count={total_pages} page={page} onChange={handleChange} />
    </div>
  );
}
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          Job
          path
          Job_Type
          Job_Location
        }
      }
    }
  }
}
`
 