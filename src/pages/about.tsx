import React, { FC } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const AboutStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

interface AboutPageProps {
    data: any;
}

const AboutPage: FC<AboutPageProps> = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>About</title>
            </Helmet>
            <AboutStyles>
                {data.excerpt}
                <div>
                    <MDXRenderer>{data.page.body}</MDXRenderer>
                </div>
            </AboutStyles>
        </Layout>
    );
};

// <div dangerouslySetInnerHTML={{__html:data.page.markdown.html}}></div>
export const query = graphql`
    {
        page: mdx(frontmatter: { name: { eq: "about" } }) {
            body
        }
    }
`;

export default AboutPage;
