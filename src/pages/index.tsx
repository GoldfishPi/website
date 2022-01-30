import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Page, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { useSidebar } from '../providers';

interface IndexPageProps extends Page {
    data: any;
}

/**
 * @description IndexPage Component
 */
const IndexPage: FC<IndexPageProps> = ({ data }) => {
    const sidebar = useSidebar();
    return (
        <Layout>
            <SEO title="Erik Badger" />
            <Background>
                <Menu onClick={() => sidebar.setOpen(true)}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </Menu>
                <Styles>
                    <div className="__hero">
                        <div className="__text">
                            <MDXRenderer>{data.page.body}</MDXRenderer>
                        </div>
                        <h2>Blog Posts</h2>
                        <BlogPosts>
                            {data.blogPosts.edges.map(({ node }: any) => (
                                <Link key={node.id} to={`/blog/${node.frontmatter.path}`}>
                                    {node.frontmatter.title}
                                </Link>
                            ))}
                        </BlogPosts>
                    </div>
                </Styles>
            </Background>
        </Layout>
    );
};

const Background = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const BlogPosts = styled.div`
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

const Menu = styled.div`
    padding: 2rem;
    color: var(--text);
    position: absolute;
    max-width: 25px;

    @media screen and (min-width: 1035px) {
        visibility: hidden;
    }
`;

const Styles = styled.div`
    display: flex;
    flex-grow: 1;

    align-items: center;

    .__hero {
        padding: 0 10vw;

        display: flex;
        flex-direction: column;

        flex-grow: 1;
    }

    .__text {
        // padding-top:2rem;
        flex-grow: 1;
    }

    h1 {
        margin-bottom: 2rem;
    }

    p {
        line-height: 2.5;
        font-size: 1.3rem;
    }
`;

export const query = graphql`
    {
        page: mdx(frontmatter: { name: { eq: "about" } }) {
            body
        }
        blogPosts: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/blog/" }
                frontmatter: { hidden: { nin: true }  }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default IndexPage;
