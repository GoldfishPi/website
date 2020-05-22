import React from "react"
import { Link, useStaticQuery, graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Card } from '@lassiebug/card';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"


const PostsStyles = styled.div`
    flex-grow:1;
    display:grid;
    grid-template-columns:1fr;
`

const ContentStyles = styled.div`
    flex-grow:1;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <ContentStyles>
                <Logo/>
                <PostsStyles>
                    {data.allPages.edges.map((page:any) => (                
                    <div
                        key={page.node.frontmatter.path}
                    >
                        <Link 
                            to={`blog${page.node.frontmatter.path}`}
                        >
                            <Card
                                hoverable
                            >
                                <h5>{ page.node.frontmatter.title }</h5>
                                <p>{page.node.excerpt}</p>
                            </Card>
                        </Link>
                    </div>
                    ))}
                </PostsStyles>
            </ContentStyles>
        </Layout>
    )
}

export const query = graphql`
        {
            allPages:allMarkdownRemark {
                edges {
                    node {
                        excerpt
                        frontmatter {
                            title
                            path
                        }
                    }
                }
            }
        }
    `

export default IndexPage
