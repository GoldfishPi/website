import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Card } from '@lassiebug/card';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentStyles = styled.div`
    width:100%;
    scroll-behavior:smooth;

    & > div {
        height:100vh;
    }

    #header {
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        max-width:100vw;
        overflow:hidden;
    }

    .__bg-img {
        height:100vh;
        filter:blur(8px);
    }

    .__bg-text {
        position:absolute;
        text-align:center;

        display:flex;
        flex-direction:column;
        align-items:center;
    }

    h1 {
        padding-bottom:var(--padding-05);
        border-bottom:2px solid var(--primary);
    }

    h2 {
        padding-top:var(--padding-05);
    }

    .__start-btn {
        width:100px;
        height:100px;

        background-color:var(--primary);
        color:var(--text);
        border:none;

        border-radius:100%;
        font-size:1.75rem;

        margin-top:1rem;

        text-decoration:none;
        font-weight:bold;
        cursor: pointer;

        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media screen and (min-width:1400px) {
        .__banner {
            width:100vw;
            height:auto;
        }
    }
`;

const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    console.log('data', data);
    return (
        <Layout>
            <SEO title="Home | Blog Posts"/>
            <ContentStyles>
                <div id="header">
                    <img className="__bg-img" src={data.banner.childImageSharp.fluid.src}/>
                    <div className="__bg-text">
                        <h1>Erik Badger</h1>
                        <h2>Simple Web Developer</h2>
                        <a href="#banner" className="__start-btn">Start</a>
                    </div>
                </div>
                <div id="banner">
                    <p>Hello</p>
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
            banner:file(relativePath:{eq:"banner.jpg"}) {
                childImageSharp {
                    fluid(maxWidth:1920, maxHeight:1080) {
                        src
                    }
                }
            }
        }
    `

export default IndexPage
