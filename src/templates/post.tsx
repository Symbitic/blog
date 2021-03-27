import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Link, graphql } from 'gatsby';
import { formatPostDate } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
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
  html?: string
};

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: NodeProps
  }
  pageContext: {
    previous: NodeProps
    next: NodeProps
  }
};

export default function BlogPostTemplate(props: Props) {
  const post = props.data.markdownRemark;
  const {
    title,
  } = props.data.site.siteMetadata;
  const { previous, next } = props.pageContext;

  return (
    <Layout title={title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />
      <main>
        <article>
          <header>
            <h1 style={{ color: 'var(--textTitle)' }}>
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(1 / 6),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-4 / 5)
              }}
            >
              {formatPostDate(post.frontmatter.date)}
            </p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <aside>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0
            }}
          >
            {/* TODO: Either truncate or make title only hover tip and not displayed. */}
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{ marginRight: 20 }}
                >
                  <span className="fas fa-arrow-left"></span>
                  &nbsp;
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  &nbsp;
                  <span className="fas fa-arrow-right"></span>
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
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    spoiler: PropTypes.string
  }),
  html: PropTypes.string
});

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    markdownRemark: NodePropTypes.isRequired
  }),
  pageContext: PropTypes.shape({
    previous: NodePropTypes,
    next: NodePropTypes
  })
};
