import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h2>a project blog.</h2>
    <div>
      {/* <Link to="/blog-home/">Home</Link> */}
    </div>
    <h4>index</h4>
    <ul>
      { data.allMarkdownRemark &&
        data.allMarkdownRemark.edges.map(post => {
        return (<li key={post.node.id} >
          <Link
            key={post.node.id}
            to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
        );
      })}
    </ul>
    
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields:[frontmatter___date], order:ASC }
      filter: {frontmatter: {published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
