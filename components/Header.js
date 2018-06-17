import React from 'react'

const Header = (props) => (
  <div>
  <h1>{props.title}</h1>
  <h2>{props.subtitle}</h2>
  </div>
)
// default props can be defind for class based as well as functional components
// just by definig the objects
Header.defaultProps = {
  title: '[ Indecision ]'
}

export default Header