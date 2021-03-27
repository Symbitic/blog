import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    markdownRemark: {
      html: string,
      frontmatter: {
        title: string
      },
      fields: {
        slug: string
      }
    }
  }
};

export const query = graphql`
  query Page($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default function PageTemplate(props: Props) {
  const {
    siteMetadata
  } = props.data.site;

  const { fields, frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout title={siteMetadata.title}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.title}
        slug={fields.slug}
      />
      <main>
        <article>
          <header>
            <h1 style={{ color: 'var(--textTitle)' }}>
              {frontmatter.title}
            </h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </Layout>
  );
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string
      })
    })
  }).isRequired
};
