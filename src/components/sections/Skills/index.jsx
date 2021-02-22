import React from 'react'
import {ReactComponent as MindIcon} from "../../common/icons/mind-icon.svg";
import ListItem from "../../ListItem";
import ContentBlock from "../../ContentBlock";

const Skills = () => {
  return (
      <ContentBlock title={'Skills'} icon={<MindIcon/>}>
        <ListItem>
          <div className='block'>
            <b className='head'>
              HTML CSS
            </b>

            <p>
              Знание семантики тегов и зачем ее использовать, так как ssr я писал для готовых проектов и имел
              опыт работы со специалистом по поисковой оптимизации. Помимо семантики, я также работал с seo, в частности:
            </p>

            <ul>
              <li> - Реализация настраиваемого ssr для реакции </li>
              <li> - OG: теги </li>
              <li> - Канонический </li>
              <li> - Схема проверки </li>
              <li> - Написание текстов и тегов для seo робота </li>
            </ul>

            <p>
              Постоянно работаю и не боюсь сложной кроссбраузерной адаптивной верстки; У меня есть опыт
              с современными, удобными флексбокс и grid, а также ужасный float.
              Всегда в работе использою современные инструменты для работы с css в частности:
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
              Обширный опыт работы с JavaScript, от простых переменных и циклов до Proxy Promise AsyncAwait и многого другого.
              Я довольно много писал на нативном JavaScript, поэтому хорошо знаю методы DOM и BOM, также активно изучаю
              новые языки являются стандартными, и я стараюсь использовать их в бою, ожидая нового оператора '??',
              классы и так далее.
            </p>

            <p>
              Я также активно изучаю алгоритмическую нотацию и нотацию большого О, когда есть возможность, стараюсь привнести
              все алгоритмы для скорости выполнения O (nlogn)
            </p>

            <p>
              <b>
                У меня также есть опыт работы с:
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
              Я работаю достаточно давно, и знаю, каковы плюсы и минусы. Я использовал большую часть
              инструменты из среды react.js, в частности:
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
              Разработка на Node.js тоже очень интересна, я уже работал в боевых проектах на Node.js,
              написав api по архитектуре микросервера, у меня также был опыт создания разовых проектов, в которых я
              получил
              опыт:
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
