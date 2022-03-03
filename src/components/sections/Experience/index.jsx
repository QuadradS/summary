import React from 'react'
import ContentBlock from "../../ContentBlock";
import {ReactComponent as WorkIcon} from "../../common/icons/work-icon.svg";
import ListItem from "../../ListItem";

const Experience = () => {
  return (
      <ContentBlock title={'Experience'} icon={<WorkIcon/>}>
        <ListItem>
          <div className='block'>
            <b className='head'>
              Svetofor.info
            </b>

            <p>
              My first experience in office with a team. I worked with Back-End developer Seo and designer.
              As html developer my core activities include:
            </p>

            <p>
              <b>JANUARY 2015 - DECEMBER 2017</b>
            </p>

            <ul>
              <li> - Creating new features using HTML LESS(CSS)</li>
              <li> - Designing and implementing HTML email templates and newsletters</li>
              <li> - Integrate html layout with wordpress</li>
              <li> - Getting JSON from back-end and show it in front-end</li>
              <li> - Integrate html to CMS CS Card</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Zensoft
            </b>

            <p>
              Development of complex SPA, team development. Support for terrible Legacy code and writing a new one.
              Teamwork with Back-end, Front-End, Mobily developers, PM - manager and QA. Reached for Team - Lead position.
            </p>

            <p>
              <b>DECEMBER 2017 - AUGUST 2019</b>
            </p>

            <ul>
              <li> - Creating new features using HTML SASS</li>
              <li> - Creating new components in react.js redux(mobx) graqhql</li>
              <li> - Creating api points using node.js express.js postgreSQL (typeorm)</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              P2P.org
            </b>

            <p>
              Developing a Secure, Non-Custodial Staking. My first experience work with solidity.
            </p>

            <p>
              <b>AUGUST 2019 - MARCH 2020</b>
            </p>

            <ul>

              <li> - Creating new features using web3</li>
              <li> - Connect smartcontracts to frontend app</li>
              <li> - Сommunicate with back-end and solidity developers</li>
              <li> - Сommunicate with back-end and solidity developers</li>
              <li> - Software worked with Mobx</li>
              <li> - Had a very interesting experience with data visualization in D3.js</li>
              <li> - Wrote an API in Node.js and then used it on the front as well</li>
              <li> - Develop pool to staking money</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Platinum.fund
            </b>

            <p>
              Gas-effective under-collateralized protocol for margin trading
            </p>

            <p>
              <b>MARCH 2020 - OCTOBER 2020</b>
            </p>

            <ul>
              <li> - Connect smartcontracts to frontend app</li>
              <li> - Creating new features using web3</li>
              <li> - Optimize pages for better loading speed</li>
              <li> - Worked with SEO: OG tags validation schema seo text and meta-tags</li>
              <li> - Worked with Redux-Saga</li>
              <li> - Creating smarcontracts</li>
              <li> - Writing documentations</li>
              <li> - Develop crypto projects</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              ownix.com
            </b>

            <p>
              Develop nft platform for selling and placing nft.
            </p>

            <p>
              <b>OCTOBER 2020 - AUGUST 2021</b>
            </p>

            <ul>
              <li> - Creating new features using web3</li>
              <li> - Connect smartcontracts to frontend app</li>
              <li> - Creating smarcontracts</li>
              <li> - Writing a big project from scratch</li>
              <li> - Writing documentations</li>
              <li> - Designing the architecture and structure of the application</li>
              <li> - Code review and small team management</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              xfamily.io
            </b>

            <p>Cryptogrowthand fintech solutions</p>

            <p>
              <b>AUGUST 2021 - Current job</b>
            </p>

            <ul>
              <li> - Creating new features using web3</li>
              <li> - Creating front end part</li>
              <li> - Code review</li>
              <li> - Creating UI Front-End with SSR</li>
            </ul>

          </div>
        </ListItem>
        </ContentBlock>
  )
}

export default Experience
