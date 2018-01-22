import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from './BlogPostPreview'

const blogPosts = [
  {
    title: 'First Post',
    desc: 'an amazing post',    
    postImg: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/02/22180000/ff3ywn-1-800x533.jpg',
    body: 'This is the beginning of a great thing'
  },
  {
    title: 'Second Post',
    desc: 'an almost as amazing post',    
    postImg: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/02/22180000/ff3ywn-1-800x533.jpg',
    body: 'This is the end of a great thing'
  }
]

const IndexPage = () => (
  <div>
    <h2>1 project. 1 team. 4 weeks.</h2>
    <div>
      {/* {
        blogPosts && blogPosts.length &&
        blogPosts.map((post, i) => {
          return < BlogPostPreview key={i} post={post}/>
        })
      } */}
      <Link to="/blog-home/">Go to blog</Link>
    </div>
    
  </div>
)

export default IndexPage
