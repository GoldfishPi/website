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
        grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: var(--padding-10);
        padding-top:var(--padding-10);
    }
    .__card-footer a{
        margin-right:var(--padding-05);
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
