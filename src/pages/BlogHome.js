import React from 'react'
import Link from 'gatsby-link'
import styles from './mini-blog-view.module.css'

const BlogHome = () => (
  <div>
    <h1>Welcome to the blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default BlogHome;