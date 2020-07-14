import React, { FC } from 'react';
import Layout from '../components/layout';
// import Card from '../components/card';
import styled from 'styled-components';
import { Card } from '@lassiebug/card';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

interface BlogPostProps {
    pageContext: {
        title:string;
        html:string;
        date:string;
    }
}

const Styles = styled.div`
    flex-grow:1;
    .__layout {
        display:grid;
        grid-template-columns:1fr 3fr 1fr;
    }
    .__content {
        grid-column:2;
    }

    @media screen and (max-width:800px) {
        .__layout {
            grid-template-columns:1fr 4fr 1fr;
        }
    }

    @media screen and (max-width:600px) {
        .__layout {
            grid-template-columns:1fr;
        }
        .__content {
            grid-column:1;
        }
    }

`

const BlogPost:FC<BlogPostProps> = ({ pageContext }) => {
    return (
        <Layout>
            <Styles>
                <div className="__layout">
                    <div className="__content">
                        <Card hoverable={false}>
                            <h1>{pageContext.title}</h1>
                            <p>{pageContext.date}</p>
                            <div 
                                className="__body"
                                dangerouslySetInnerHTML={{__html:pageContext.html}}
                            >
                            </div>
                        </Card>
                    </div>
                </div>
            </Styles>
        </Layout>
    );
};

export default BlogPost;
