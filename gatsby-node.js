const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');

const getType = (file) => /^([^/]+)\//.exec(file)[1];

function getSlug(type, relativeFilePath) {
  switch (type) {
    case 'posts':
      return `/blog${relativeFilePath}`;
    case 'pages':
    default:
        return relativeFilePath;
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.tsx');
  const postTemplate = path.resolve('./src/templates/post.tsx');
  const blogTemplate = path.resolve('./src/templates/blog.tsx');

  const { data, errors } = await graphql(
    `
      {

        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `
  );

  if (errors) {
    console.error(errors);
    throw errors;
  }

  // Create blog posts.
  const posts = data.allMarkdownRemark.edges.filter(({ node }) => node.fields.type === 'posts');

  // Create pages.
  const pages = data.allMarkdownRemark.edges.filter(({ node }) => node.fields.type === 'pages');

  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  });

  posts.forEach((post, index, items) => {
    const previous = index === items.length - 1
      ? null
      : items[index + 1].node;
    const next = index === 0 ? null : items[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      },
    });
  });

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    pathPrefix: '/blog',
    component: blogTemplate
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const relativeFilePath = createFilePath({
      node,
      getNode
    });
    const absolutePath = path.relative(__dirname, node.fileAbsolutePath);
    const type = getType(absolutePath);
    const slug = getSlug(type, relativeFilePath);

    createNodeField({
      name: 'slug',
      node,
      value: slug
    });
    createNodeField({
      name: 'path',
      node,
      value: absolutePath
    });
    createNodeField({
      name: 'type',
      node,
      value: type
    });
  }
};

