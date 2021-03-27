import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import { Link, graphql } from 'gatsby';
import { formatPostDate } from '../utils/helpers';

export const query = graphql`
  query Blog($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
      filter: { fields: { type: { eq: "posts" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;

type NodeProps = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    spoiler: string
  }
};

type EdgeProps = {
  node: NodeProps
};

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: EdgeProps[]
    }
  }
  pageContext: {
    previousPagePath: string
    nextPagePath: string
    humanPageNumber: number
    numberOfPages: number
  }
};

export default function Blog({ data, pageContext }: Props) {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages
  } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Blog" />
      <main>
        {humanPageNumber !== 1 && (
          <h3
            style={{
              fontSize: rhythm(1),
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
              textDecoration: 'underline',
              textAlign: 'center'
            }}
          >
            Page {humanPageNumber} of {numberOfPages}
          </h3>
        )}
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    fontSize: rhythm(1),
                    marginBottom: rhythm(1 / 4),
                    marginTop: rhythm(i === 0 ? 2 : 1 / 4)
                  }}
                >
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={node.fields.slug}
                    rel="bookmark"
                  >
                    {title}
                  </Link>
                </h3>
                <small
                  style={{
                    fontFamily: 'Noto Sans, sans-serif',
                    fontSize: rhythm(0.6)
                  }}
                >
                  {formatPostDate(node.frontmatter.date)}
                </small>
              </header>
              <p
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: rhythm(0.6)
                }}
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </article>
          );
        })}
      </main>
      <aside>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            <li>
              {previousPagePath && (
                <Link
                  style={{ boxShadow: 'none' }}
                  to={previousPagePath}
                  rel="prev"
                  aria-label="Previous page"
                >
                  <span className="fas fa-arrow-left fa-2x"></span>
                </Link>
              )}
            </li>
            <li>
              {nextPagePath && (
                <Link
                  style={{ boxShadow: 'none' }}
                  to={nextPagePath}
                  rel="next"
                  aria-label="Next page"
                >
                  <span className="fas fa-arrow-right fa-2x"></span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Layout>
  );
}

const NodePropTypes = PropTypes.shape({
  fields: PropTypes.shape({
    slug: PropTypes.string
  }),
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    spoiler: PropTypes.string
  })
});

const EdgePropTypes = PropTypes.shape({
  node: NodePropTypes
});

Blog.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(EdgePropTypes).isRequired
    })
  }),
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
    humanPageNumber: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired
  })
};
