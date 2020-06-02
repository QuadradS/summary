import React from 'react'
import { ReactComponent as OutlinedDotIcon } from '../common/icons/outlined-dot-icon.svg'
import './styles.scss'
const ListItem = ({title, children}) => {
  return (
    <div className={'list-item'}>
      <div className={'list-item--head'}>
        <OutlinedDotIcon className={'list-item--head-dot'}/>
        {!!title && (<h3>{title}</h3>)}
      </div>
      <div className={'list-item--body'}>
        {children}
      </div>
    </div>
  )
}

export default ListItem
