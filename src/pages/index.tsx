import React from "react"
import { Link, useStaticQuery, graphql, PageProps } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';
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
    console.log('data lol', data);
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
                            >
                                <h2>{ page.node.frontmatter.title }</h2>
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
