import {graphql, PageProps} from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LoremIpsum from 'react-lorem-ipsum';
import {Card} from "@lassiebug/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


const IndexPage:React.FC<PageProps<any>> = ({ data }) => {
    const banner:string = data.banner.childImageSharp.fluid.src;
    return (
        <Layout>
            <SEO title="Home | Blog Posts"/>
            <ContentStyles>
                <div id="header">
                    <img className="__bg-img" src={banner}/>
                    <div className="__bg-text">
                        <h1>Erik Badger</h1>
                        <h2>Simple Web Developer</h2>
                        <a href="#banner" className="__btn-start">Start</a>
                    </div>
                </div>
                <div id="banner">
                    <BannerStyles>
                        <div>
                            <div className="__heading">
                                <h2>lorem ipsum</h2>
                                <h3>dolar gammet takem</h3>
                            </div>
                            <p className="__about">
                                <LoremIpsum
                                    avgWordsPerSentence={4}
                                    avgSentencesPerParagraph={4}
                                />
                            </p>
                            <div className="__cards">
                                <Card header={() => <p>lorem</p>} img={banner}>
                                    <p>
                                        <LoremIpsum
                                            avgWordsPerSentence={4}
                                            avgSentencesPerParagraph={4}
                                        />
                                    </p>
                                </Card>
                                <Card header={() => <p>lorem</p>} img={banner}>
                                    <p>
                                        <LoremIpsum
                                            avgWordsPerSentence={4}
                                            avgSentencesPerParagraph={4}
                                        />
                                    </p>
                                </Card>
                                <Card header={() => <p>lorem</p>} img={banner}>
                                    <p>
                                        <LoremIpsum
                                            avgWordsPerSentence={4}
                                            avgSentencesPerParagraph={4}
                                        />
                                    </p>
                                </Card>

                            </div>
                        </div>
                    </BannerStyles>
                </div>
                <div id="mission">
                    <MissionStyles>
                        <div className="__content">
                            <div className="__img-container">
                                <img className="__banner" src={banner}/>
                            </div>
                            <h2>Lorem Ipsum</h2>
                            <h3>
                                <LoremIpsum
                                    avgWordsPerSentence={10}
                                    avgSentencesPerParagraph={4}
                                />
                            </h3>
                            <LoremIpsum/>
                            <div className="__img-container">
                                <a href="#mission" className="__btn-next">
                                    <FontAwesomeIcon icon={faChevronDown} size="2x"/>
                                </a>
                            </div>
                        </div>
                    </MissionStyles>
                </div>
            </ContentStyles>
        </Layout>
    )
}

const MissionStyles = styled.div`

    display:grid;
    grid-template-columns:1fr 12fr 1fr;
    flex-grow:1;

    padding:var(--padding-20);

    .__content {
        grid-column:2;
    }
    .__img-container {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
    }
    .__banner {
        max-width:100%;
    }
`;

const BannerStyles = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;

    flex-grow:1;
    padding:var(--padding-10);

    .__heading {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    h2 {
        margin-bottom:var(--padding-05);
    }

    h3 {
        margin-bottom:var(--padding-05);
    }

    .__about {
        padding-top:0;
        text-align:center;
    }
    .__cards {
        display:grid;
        gap:var(--padding-05);
        grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
    }
`;

const ContentStyles = styled.div`
    width:100%;
    scroll-behavior:smooth;

    & > div {
        // min-height:100vh;
        display:flex;
        flex-direction:column;
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
        text-align:center;
    }

    h2 {
        padding-top:var(--padding-05);
        text-align:center;
    }

    .__btn-start {
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

    .__btn-next {
        display:flex;
        justify-content:center;
        align-items:center;

        width:200px;

        background-color:var(--primary);
        color:var(--text);
        border:none;

        border-radius:var(--corner);

        margin-top:var(--padding-10);
    }

    @media screen and (min-width:1400px) {
        .__bg-img {
            width:100vw;
            height:auto;
        }
    }
`;

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
