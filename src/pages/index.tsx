import React from "react"
import { Link, useStaticQuery, graphql, PageProps } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Card from '../components/card';


const PostsStyles = styled.div`
    flex-grow:1;
    display:grid;
    padding:var(--padding);
    grid-template-columns:1fr;
    a {
        text-decoration:none;
        color:var(--text);
    }
`

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    console.log('pages??', data);
    return (
        <Layout>
            <SEO title="Home" />
            <PostsStyles>
                {data.allPages.edges.map((page:any) => (                
                <Link 
                    to={`blog${page.node.frontmatter.path}`}
                    key={page.node.frontmatter.path}
                >
                    <Card
                    >
                        { page.node.frontmatter.title }
                    </Card>
                </Link>
                ))}
            </PostsStyles>
        </Layout>
    )
}

export const query = graphql`
        {
            allPages:allMarkdownRemark {
                edges {
                    node {
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
