import React from 'react'
import Link from 'gatsby-link'
import logo from '../../static/avocado.svg'

const Header = () => (
  <div
    style={{
      background: '#f8ffad',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#57913a',
            textDecoration: 'none',
            textShadow: '1px 1.5px 1px 1px black',
          }}
        >
          avocode
          <img 
          src={logo} alt="logo" 
          className="avocado-logo floating"
          style={{
            float: 'left',
            margin: '0 20px'
          }} />
        </Link>
        <p style={{ 
          'fontSize': '0.8rem',
          'margin': 0,
          }}> by aaron </p>
      </h1>
    </div>
  </div>
)

export default Header
