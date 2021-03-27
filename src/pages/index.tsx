import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

export const pageQuery = graphql`
  query Home {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const mainStyle = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: rhythm(0.8),
  marginTop: rhythm(1)
};

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
};

export default function Home({ data }: Props) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <main style={mainStyle}>
        <p>
          Hello, World!&mdash;My name is Alex Shaw. Welcome to my personal website.
        </p>
      </main>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  })
};
