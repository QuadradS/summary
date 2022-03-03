import React from 'react'
import './styles.scss'
const ListItem = ({title, children}) => {
  return (
    <div className={'list-item'}>
      <div className={'list-item--head'}>
        {!!title && (<h3>{title}</h3>)}
      </div>
      <div className={'list-item--body'}>
        {children}
      </div>
    </div>
  )
}

export default ListItem
