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
              Freelance
            </b>

            <p>
              The beginning of a career learned how to make up on time communicate with strangers learned to
              negotiate (not always) about the price and timing. In general the beginning of my career when I stopped
              layout my simple pages and started fulfill orders.
            </p>

            <p>
              <b>06.2016 - 01.2017</b>
            </p>

            <ul>

              <li> - Layout adaptive cross-browser layout</li>
              <li> - Used scss less and other preprocessors</li>
              <li> - Worked with pug-jade preprocessor for html</li>
              <li> - Used JQuery and didn't write much in pure JavaScript</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Aliton.ru
            </b>

            <p>
              My first experience of working for a company worked on an hourly basis, but every day I had to be in touch
              3 - 4 hours. I liked the work very much. The site was on wordpress, I made edits to old pages, made up new
              ones and pulled on wp. This was my first experience with Legacy Code and a fairly large volume. Worked
              with a designer paired with.
            </p>

            <p>
              <b>01.2017 - 04.2017</b>
            </p>

            <ul>

              <li> - Layout adaptive cross-browser layout</li>
              <li> - Layout for wp and partial stretch on the engine</li>
              <li> - Worked with pug-jade preprocessor for html</li>
              <li> - Writing JavaScript Scripts</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Svetofor.kg
            </b>

            <p>
              My first experience in the office was the place where I learned the methodology of Agile and Scrum. Worked
              in a team with layout designers ceoback-end programmer and designer. Also support for the old and layout
              and installation layout on cms CS-Card.
            </p>

            <p>
              <b>04.2017 - 06.2017</b>
            </p>

            <ul>
              <li> - Layout adaptive cross-browser layout</li>
              <li> - Layout for OpenCard</li>
              <li> - Writing More Complex JavaScript Scripts</li>
              <li> - Optimizing pages for SEO</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Grooni.com
            </b>

            <p>
              Layout installation on wp. Creation of responsive themes and plugins. Custom ajax and import it into wp.
              Place, where I've learned pixel-perfect layout where every 2-3 pixels matters.
            </p>

            <p>
              <b>06.2017 - 08.2017</b>
            </p>

            <ul>
              <li> - Layout responsive cross-browser pixel-perfect layout</li>
              <li> - Layout for WordPress</li>
              <li> - Writing more complex JavaScript scripts for backing requests</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Zensoft.io
            </b>

            <p>
              Complex SPA development is team development. Support for legacy code and writing a new project in a team
              with scratch. Teamwork with Back-end Front-End Mobile developers PM - manager and QA. In this company I
              pumped very well as JavaScript developer. I also managed to work in the project as a team leader, there
              were 12 frontists and PM in the team manager.
            </p>

            <p>
              <b>08.2017 - 09.2019</b>
            </p>

            <ul>

              <li> - Writing Front End with React.js</li>
              <li> - Worked with GraphQL and JSON API</li>
              <li> - Worked with Redux</li>
              <li> - Development was carried out in Typescript</li>
              <li> - Software worked with Mobx</li>
              <li> - Had a very interesting experience with data visualization in D3.js</li>
              <li> - Wrote an API in Node.js and then used it on the front as well</li>
              <li> - Writing back and front tests</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Yurtah.com
            </b>

            <p>

              Front - end development for an American real estate startup. Got experience in this project work SEO
              optimized with custom SSR for React. I also worked with Redux-Saga.
            </p>

            <p>
              <b>09.2019 - 11.2019</b>
            </p>

            <ul>

              <li> - Optimize pages for better loading speed</li>
              <li> - Worked with SEO: OG tags validation schema seo text and meta-tags</li>
              <li> - Worked with Redux-Saga</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              UI Giants
            </b>

            <p>
              Front - end development for an American real estate startup. Got experience in this project work SEO
              optimized with custom SSR for React. I also worked with Redux-Saga.
            </p>

            <p>
              <b>11.2019 - 05.2020</b>
            </p>

            <ul>

              <li> - Writing a big project from scratch</li>
              <li> - Designing the architecture and structure of the application</li>
              <li> - Code review and small team management</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              P2P Validator
            </b>

            <p>
              <b>05.2020 - 10.2020</b>
            </p>

            <ul>
              <li> - Creating UI Front-End with SSR</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Sphere Inc
            </b>

            <p>
              <b>07.2020 - Current work</b>
            </p>

            <ul>
              <li> - Creating UI Front-End with WebRTC</li>
            </ul>

          </div>
        </ListItem>
      </ContentBlock>
  )
}

export default Experience
