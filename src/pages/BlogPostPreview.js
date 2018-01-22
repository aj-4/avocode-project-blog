import React from 'react'
import Link from 'gatsby-link'
import styles from './mini-blog-view.module.css'

class BlogPostPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  clickDesc() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    let {title, desc, postImg, body} = this.props.post;
    return (
      <div>
      <div className={styles.preview} onClick={e => this.clickDesc(e)}>
      {/* <img src={props.post.postImg} className={styles.prev-img} alt=""/> */}
      <h3>{title}</h3>
      <div className={styles.description}>
        <p className={styles.excerpt}>
          {desc}
        </p>
      </div>
      {
        this.state.clicked &&
        <div className={styles.body}>
        {body}
        </div>
      }
      </div>
      </div>
    );
  }
}

export default BlogPostPreview;