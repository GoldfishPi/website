/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPost.tsx')

    const queryResults = await graphql(`
        query AllPages {
            allPosts:allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                            date
                        }
                        html
                    }
                }
            }
        }
    `)
    console.log('query lol', queryResults)
    queryResults.data.allPosts.edges.forEach(({ node }) => {
        console.log('node lol', node);
        createPage({
            path:`/blog${node.frontmatter.path}`,
            component:blogPostTemplate,
            context: {
                title:node.frontmatter.title,
                date:node.frontmatter.date,
                html:node.html
            }
        })
    });
}
