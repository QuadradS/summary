import React from 'react'
import './index.scss';
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";

const ContentPage = () => {
  return (
      <div className={'content-page'}>

        <AboutMe/>
        <Skills/>
        <Experience/>

      </div>
  )
}

export default ContentPage
