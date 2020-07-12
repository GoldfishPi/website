import React, { FC } from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';

interface AboutPageProps {
    data:any;
}

const AboutPage:FC<AboutPageProps> = ({ data }) => {
    return (
        <Layout>
            <div dangerouslySetInnerHTML={{__html:data.page.markdown.html}}></div>
        </Layout>
    );
};

export const query = graphql`
    {
        page: file(relativePath:{ eq: "about.md" }) {
            markdown:childMarkdownRemark {
                html
            }
        }
    }
`

export default AboutPage;
