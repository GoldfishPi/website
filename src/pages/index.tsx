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
                    key={page.node.frontmatter.path}
                >
                    <Link 
                        to={`blog${page.node.frontmatter.path}`}
                    >
                        <Card
                            hoverable
                        >
                            <h2>{ page.node.frontmatter.title }</h2>
                            <p>{page.node.excerpt}</p>
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
