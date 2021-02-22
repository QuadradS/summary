import React from 'react'
import { ReactComponent as UserIcon } from '../common/icons/user-icon.svg'
import { ReactComponent as ContactsIcon } from '../common/icons/contacts-icon.svg'
import './index.scss'

const SideBar = () => {
  return (
    <div className={'sidebar'}>
      <img className={'sidebar--user-photo'} src="/summary/images/me.jpeg" alt=""/>
      <div className={'sidebar--info'}>
        <p className={'sidebar--name'}>Danil Sitdikov</p>
        <p className={'sidebar--prof'}>JavaScript Developer</p>
      </div>

      <div className={'contact-block'}>
        <div className={'contact-block--head'}>
          <UserIcon className={'contact-block--icon'}/>
          <h3 className={'contact-block--title'}>About me</h3>
        </div>
        <p className={'contact-block--text'}>
          Легко нахожу общий язык с коллективом. Я люблю находиться в атмосфере разработки и опытных разработчиков
        </p>
      </div>

      <div className={'contact-block'}>
        <div className={'contact-block--head'}>
          <ContactsIcon className={'contact-block--icon'}/>
          <h3 className={'contact-block--title'}>Contacts</h3>
        </div>
        <a className={'contact-block--link'} href="https://t.me/Quadrad_s" target='_blank'>Telegram</a>
        <a className={'contact-block--link'} href="tel:+996554309097" target='_blank'>Phone</a>
        <a className={'contact-block--link'} href="https://github.com/QuadradS" target='_blank'>Github</a>
        <a className={'contact-block--link'} href="https://gist.github.com/QuadradS" target='_blank'>Github Gist</a>
      </div>

    </div>
  )
}

export default SideBar
