
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {graphql, Page} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React, {FC} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Logo from '../components/logo';
import SEO from '../components/seo';

interface IndexPageProps extends Page {
    data:any;
}

const iconSize = "3x";
/**
* @description IndexPage Component
*/
const IndexPage:FC<IndexPageProps> = ({ data }) => {
    return (
        <Layout>
            <SEO title="" />
            <Nav>
                <Logo />
                <div className="__nav">
                    {/*
                    <Link to="about">
                        <FontAwesomeIcon icon={faAddressCard} size={iconSize}/>
                    </Link>
                    <Link to="blog">
                        <FontAwesomeIcon icon={faBookOpen} size={iconSize}/>
                    </Link>
                    <Link to="projects">
                        <FontAwesomeIcon icon={faProjectDiagram} size={iconSize}/>
                    </Link>
                      */}
                </div>
                <div className="__links">
                    <a href="https://github.com/GoldfishPi" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size={iconSize}/>
                    </a>
                </div>
            </Nav>
            <Styles>
                <div className="__hero">
                    <div className="__text">
                        <MDXRenderer>{data.page.body}</MDXRenderer>
                    </div>
                </div>
            </Styles>
        </Layout>
    );
};

const Nav = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    padding:var(--padding-05);
    padding-bottom:var(--padding-20);

    a {
        padding-bottom:var(--padding-10);
    }

    .__nav {
        display:flex;
        flex-direction:column;
        flex-grow:1;

        & > a {
            padding-bottom:var(--padding-20);
        }
    }
`

const Styles = styled.div`
    display:flex;
    flex-grow:1;
    background: linear-gradient(335deg, var(--blue) 0%, var(--cyan) 25%, var(--magenta) 100%);

    .__hero {
        padding:0 20%;
        padding-top:8rem;

        display:flex;
        flex-direction:column;

        flex-grow:1;
    }

    .__text {
        flex-grow:1;
    }

    h1 {
        margin-bottom:2rem;
    }

    p {
        line-height:2.5;
        font-size:1.3rem;
    }

`

export const query = graphql`
    {
        page: mdx(frontmatter: { name:{ eq: "about" } }) {
            body
        }
    }
`;

export default IndexPage;
