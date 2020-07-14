import React, { FC } from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

interface ProjectsPageProps {
    data:any;
}

const ProjectPageStyles = styled.div`
    width:100%;
    .__cards {
        display: grid;
        grid-template-columns:repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: var(--padding-10);
        padding:var(--padding-10) 0;
    }
    .__card-footer a{
        &: after {
            margin:0 var(--padding-05);
            content: '|';
        }
        &:last-child:after {
            content:none;
        }
    }

    @media screen and (max-width:600px) {
        .__cards {
            grid-template-columns: 1fr;
        }
    }
`

const ProjectsPage:FC<ProjectsPageProps> = ({ data }) => {
    return (
        <Layout>
            <ProjectPageStyles>
                <MDXRenderer>{ data.page.body }</MDXRenderer>
            </ProjectPageStyles>
        </Layout>
    );
};

export const query = graphql`
    {
        page: mdx(frontmatter: { name:{ eq: "projects" } }) {
            body
        }
    }
`

export default ProjectsPage;
