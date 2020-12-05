import { useState } from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {graphql, Page} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React, {FC} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Logo from '../components/logo';
import SEO from '../components/seo';
import Sidebar from '../components/Sidebar';
import {useSidebar} from '../providers';

interface IndexPageProps extends Page {
    data:any;
}

/**
* @description IndexPage Component
*/
const IndexPage:FC<IndexPageProps> = ({ data }) => {
    const sidebar = useSidebar();
    return (
        <Layout>
            <SEO title="Erik Badger" />
            <Background>
                <Menu onClick={() => sidebar.setOpen(true)}>
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </Menu>
                <Styles>
                    <div className="__hero">
                        <div className="__text">
                            <MDXRenderer>{data.page.body}</MDXRenderer>
                        </div>
                    </div>
                </Styles>
            </Background>
        </Layout>
    );
};

const Background = styled.div`
    background: linear-gradient(335deg, var(--blue) 0%, var(--cyan) 25%, var(--magenta) 100%);
    display:flex;
    flex-grow:1;
`

const Menu = styled.div`

    padding:2rem;
    color:var(--text);
    position:absolute;

    @media screen and (min-width:1035px) {
        visibility:hidden;
    }
`;

const Styles = styled.div`
    display:flex;
    flex-grow:1;

    align-items:center;

    .__hero {
        padding:0 10vw;

        display:flex;
        flex-direction:column;

        flex-grow:1;
    }


    .__text {
        // padding-top:2rem;
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
