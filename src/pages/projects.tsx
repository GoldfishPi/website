import React, { FC } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Card } from '@lassiebug/card';

interface ProjectsPageProps {
    data: any;
}

const ProjectPageStyles = styled.div`
    width: 100%;
    margin: var(--padding-20);
    .__background {
        background: green;
        padding: var(--padding-20);
        background: var(--background);
        border-radius: var(--corner);
    }
    .__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: var(--padding-10);
        padding: var(--padding-10) 0;
    }
    .__card-footer a {
        &:after {
            margin: 0 var(--padding-05);
            content: '|';
        }
        &:last-child:after {
            content: none;
        }
    }

    @media screen and (max-width: 600px) {
        .__cards {
            grid-template-columns: 1fr;
        }
    }
`;

const ProjectsPage: FC<ProjectsPageProps> = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <ProjectPageStyles>
                <div class="__background">
                    <MDXRenderer>{data.page.body}</MDXRenderer>
                </div>
            </ProjectPageStyles>
        </Layout>
    );
};

export const query = graphql`
    {
        page: mdx(frontmatter: { name: { eq: "projects" } }) {
            body
        }
    }
`;

export default ProjectsPage;
