import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Card } from '@lassiebug/card';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentStyles = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 1fr;

    .__cards {
        width: 100%;
    }

    @media screen and (min-width:900px) {
        grid-template-columns:1fr 3fr 1fr;
        .__cards {
            grid-column:2;
        }
    }
`;

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
                <ContentStyles>
                    <div className="__cards">
                        {data.allPages.edges.map((page:any) => (                
                            <Link 
                                to={`blog${page.node.markdown.frontmatter.path}`}
                                key={page.node.markdown.frontmatter.path}
                            >
                                <Card
                                    hoverable
                                >
                                    <h2>{ page.node.markdown.frontmatter.title }</h2>
                                    <p>{page.node.markdown.excerpt}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
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
