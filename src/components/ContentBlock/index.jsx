import React from 'react'
import './index.scss'

const ContentBlock = ({ icon, children, title }) => {
  return (
    <div className={'content-block'}>

      <div className={'content-block--head'}>
        {icon}
        <h3 className={'content-block--title'}>{title}</h3>
      </div>
      <div className={'content-block--body'}>
        {children}
      </div>
    </div>
  )
}

export default ContentBlock
