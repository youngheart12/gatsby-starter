const path = require('path');
const _ = require("lodash")
exports.createPages = async({ actions, graphql,reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/template/blogTemplate.js');
  const jobTemplate=path.resolve('src/template/jobTemplate.js');
  const tagTemplate = path.resolve("src/template/tags.js")
  const result = await graphql(`
  {
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
       
          frontmatter {
            tags,
            title,
            date,
            path
            thumbnail
          }
          excerpt
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`)

    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    })
  })

  let tags = [];
  // Make tag pages
  _.each(posts,edge=>{
    if(_.get(edge,"node.frontmatter.tags"))
    {
      tags=tags.concat(edge.node.frontmatter.tags)
    }
  })
  tags = _.uniq(tags)

  tags.forEach((tag) => {
     const tagPath = `/tags/`
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context:{
        tag
      }
    })
  })
  console.log(tags);
}

  // `).then(result => {
  //   if (result.errors) {
  //     return Promise.reject(result.errors);
  //   }

  //   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //     if(node.frontmatter.identifier==="blog"){
  //     createPage({
  //       path: node.frontmatter.path,
  //       component:blogPostTemplate,
  //       context: {},
  //     });
  //   }else{
  //     createPage({
  //       path: node.frontmatter.path,
  //       component:jobTemplate,
  //       context: {},
  //     });
  //   }
  //   });
  // });
