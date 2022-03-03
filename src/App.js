import React from 'react'
import './index.scss'
import ContentPage from './components/ContentPage'
import SideBar from './components/SideBar'

const App = () => (
  <div className='main-container'>
    <SideBar/>
    <ContentPage/>
  </div>
)
export default App
