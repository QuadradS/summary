import React from 'react'
import './index.scss';
import AboutMe from "../AboutMe";
import Skills from "../Skills";

const ContentPage = () => {
  return (
      <div className={'content-page'}>

        <AboutMe/>
        <Skills/>

      </div>
  )
}

export default ContentPage
