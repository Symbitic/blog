import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
};

export default function NotFoundPage({ data }: Props) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You tried to access a page that doesn&#39;t exist.</p>
    </Layout>
  );
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  })
};
