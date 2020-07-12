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
        {
            allPages: allFile(filter: { sourceInstanceName:{ eq: "posts"}}) {
                edges {
                    node {
                        id
                        relativePath
                        markdown: childMarkdownRemark {
                            excerpt
                            html
                            frontmatter {
                                title
                                path
                                path
                            }
                        }
                    }
                }
            }
        }

    `)
    queryResults.data.allPages.edges.forEach(({ node }) => {
        createPage({
            path:`/blog${node.markdown.frontmatter.path}`,
            component:blogPostTemplate,
            context: {
                title:node.markdown.frontmatter.title,
                date:node.markdown.frontmatter.date,
                html:node.markdown.html
            }
        })
    });
}
