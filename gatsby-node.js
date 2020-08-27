const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/template/blogTemplate.js');
  const jobTemplate=path.resolve('src/template/jobTemplate.js');
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
          
            frontmatter {
              path
              title
              date
              Job
             
              Job_Location
              Job_Type
              Vaccancy_
              identifier
              thumbnail
            }
            excerpt(pruneLength: 2000)
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if(node.frontmatter.identifier==="blog"){
      createPage({
        path: node.frontmatter.path,
        component:blogPostTemplate,
        context: {},
      });
    }else{
      createPage({
        path: node.frontmatter.path,
        component:jobTemplate,
        context: {},
      });
    }
    });
  });
};