import React from "react"
import { Link, graphql, PageProps } from "gatsby"
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
    grid-row: 1 / span 3;
`

const CardStyles = styled.div`
    grid-row: 2;
`

const LayoutStyles = styled.div`
    display:grid;
    grid-template-columns:3fr 1fr;
    grid-template-rows: 12vh 30vh auto;
    grid-gap:2rem;
    padding:var(--padding-10);
    width:100%;

    a {
        color:var(--primary);
    }
`

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <LayoutStyles>
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
                                    <h2>{ page.node.frontmatter.title }</h2>
                                    <p>{page.node.excerpt}</p>
                                </Card>
                            </Link>
                        </div>
                        ))}
                    </PostsStyles>
                </ContentStyles>
                <CardStyles>
                    <Card
                        header={():any => (
                            <h2>Other Sites</h2>
                        )}
                    >
                        <ul>
                            <li>
                                <a href="https://www.nomadpitstops.com/" target="_blank">Nomad Pit Stops</a>
                            </li>
                            <li>
                                <a href="https://github.com/GoldfishPi" target="_blank">Github</a>
                            </li>
                        </ul>
                    </Card>
                </CardStyles>
            </LayoutStyles>
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
