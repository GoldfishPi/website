import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Card } from '@lassiebug/card';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentStyles = styled.div`
    flex-grow:1;
    display:flex;
    justify-content: center;
    margin-top:1rem;
`;

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
                <ContentStyles>
                {data.allPages.edges.map((page:any) => (                
                <div
                    key={page.node.markdown.frontmatter.path}
                >
                    <Link 
                        to={`blog${page.node.markdown.frontmatter.path}`}
                    >
                        <Card
                            hoverable
                        >
                            <h2>{ page.node.markdown.frontmatter.title }</h2>
                            <p>{page.node.markdown.excerpt}</p>
                        </Card>
                    </Link>
                </div>
                ))}
            </ContentStyles>
        </Layout>
    )
}

export const query = graphql`
        {
            allPages: allFile(filter: { sourceInstanceName:{ eq: "posts"}}) {
                edges {
                    node {
                        id
                        relativePath
                        markdown: childMarkdownRemark {
                            excerpt
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
    `

export default IndexPage
