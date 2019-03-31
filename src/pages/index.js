import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostsSection from '../components/posts-section';
import Subscribe from '../components/subscribe';

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;
    return (
      <Layout>
        <SEO
          title="All Posts"
          keywords={[
            `mindless`,
            `blog`,
            `javascript`,
            `agney`,
            `boy with silver wings`,
          ]}
        />
        <main>
          <Bio />
          <PostsSection title={`Latest Posts`} posts={posts} />
          <Subscribe />
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
