import React from 'react'
import {ReactComponent as MindIcon} from "../../common/icons/mind-icon.svg";
import ListItem from "../../ListItem";
import ContentBlock from "../../ContentBlock";

const Skills = () => {
  return (
      <ContentBlock title={'Умения'} icon={<MindIcon/>}>
        <ListItem>
          <div className='block'>
            <b className='head'>
              HTML CSS
            </b>

            <p>
              Knowledge of the semantics of tags and why to use it, since I wrote ssr for ready-made projects and had
              experience
              work
              with a seo specialist. In addition to semantics, I also worked with seo, in particular:
            </p>

            <ul>
              <li> - Implementing custom ssr for react</li>
              <li> - OG: tags</li>
              <li> - Canonical</li>
              <li> - Validation schema</li>
              <li> - Writing texts and tags for a seo robot</li>
            </ul>

            <p>
              I constantly typeset and am not afraid of a complex cross-browser adaptive layout; I have layout
              experience as well as with
              modern, convenient flexbox and grid, as well as with the dreaded float table and 'marvelous' layout.
              Always at work
              use
              modern tools for working with css in particular:
            </p>

            <ul>
              <li> - Less scss stylus (mixins variables)</li>
              <li> - CSS mobiles and native variables</li>
              <li> - Post css</li>
              <li> - CSS in JS and styled components</li>
              <li> - BEM OOCSS SMACSS</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              JavaScript
            </b>

            <p>
              Extensive JavaScript experience from simple variables and loops to Proxy Promise AsyncAwait and more.
              I wrote quite a lot in native JavaScript, so I know DOM and BOM methods well, I also actively study
              new languages are standard and I try to use them in combat while waiting for the new operator '??',
              classes and so on.
            </p>

            <p>
              I also actively study algorithmic and big O notation, when there is an opportunity I try to bring
              everything algorithmic to execution speed O(nlogn)
            </p>

            <p>
              <b>
                I also have experience with:
              </b>
            </p>

            <ul>
              <li> - EcmaScript 5/7/8/9</li>
              <li> - DOM / BOM scripting async defer</li>
              <li> - Prototypes inheritance, ES5 functions constructors, es6 classes</li>
              <li> - Understanding and Using OOP</li>
              <li> - Data types scope, closures, context, asynchronous JS model (event loop)</li>
              <li> - Canvas or SVG API</li>
              <li> - Ability and willingness to write tests</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className={'block'}>
            <b className={'head'}>
              React.js
            </b>

            <p>
              I studied the main course on which I work quite well and I know what are the pros and cons. I used most of
              the tools from the react.js environment, in particular:
            </p>

            <ul>
              <li> - Stateless / stateful order components</li>
              <li> - Components and Props</li>
              <li> - State and Lifecycle Methods</li>
              <li> - Context, Context.provider</li>
              <li> - Portal, Fragment, Error boundaries</li>
              <li> - Refs and DOM in react</li>
              <li> - Using Hooks in Functional Components</li>
              <li> - TypeScript / Flow for React.js</li>
              <li> - Redux / Mobx / Recoil</li>
              <li> - Redux: redux, react-redux, redux-saga, reselect</li>
              <li> - Webpack environment, css-modules, stylus / scss, easily build webpack for react / vue from
                scratch
              </li>
              <li> - Using libraries of UI components: Ant design, material UI, bootstrap</li>
              <li> - Graphql (apollo)</li>
              <li> - Unit testing</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className={'block'}>
            <b className={'head'}>
              Node.js
            </b>

            <p>
              Development on Node.js is also very interesting, I have already worked in combat projects on Node.js,
              writing api on microserver architecture, I also had experience in creating one-time projects in which I
              gained
              experience:
            </p>

            <ul>
              <li> - Working with microserver architecture</li>
              <li> - Express.js</li>
              <li> - Thinking through DTO planning contracts between microservices</li>
              <li> - MongoDB, Postrgess</li>
              <li> - Postrgess + TypeORM</li>
            </ul>

          </div>
        </ListItem>

      </ContentBlock>
  )
}

export default Skills
