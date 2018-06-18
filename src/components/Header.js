import React from 'react'

const Header = (props) => (
  <div className='header'>
  <h1 className='header__title'>{props.title}</h1>
  <h2 className='header__subtitle'>{props.subtitle}</h2>
  </div>
)
// default props can be defind for class based as well as functional components
// just by definig the objects
Header.defaultProps = {
  title: '[ Indecision ]'
}

export default Header