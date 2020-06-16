import React from 'react'
import {ReactComponent as MindIcon} from "../common/icons/mind-icon.svg";
import ListItem from "../ListItem";
import ContentBlock from "../ContentBlock";

const Skills = () => {
  return (
      <ContentBlock title={'Умения'} icon={<MindIcon/>}>
        <ListItem>
          <p className='block'>
            <b className='head'>
              HTML CSS
            </b>

            <p>
              Знанию семантику тегов и для чего использовать так как частно писал ssr для готовых проектов и был опыт
              работы
              с seo специалистом. По мимо семантики так же работал с seo в частности:
            </p>

            <ul>
              <li> - Реализация собственного ssr для react</li>
              <li> - OG: метки</li>
              <li> - Canonical</li>
              <li> - Validation schema</li>
              <li> - Написание текстов и тэгов для seo робота</li>
            </ul>

            <p>
              Постоянно верстаю и не боюсь сложной кроссбраузерной адаптивной верстки есть опыт верстки как и с
              соверменными удобными flexbox и grid так с ужаными float табличной и 'дивной' версткой. Вегда в работе
              использую
              современные инструменты для работы с css в частности:
            </p>

            <ul>
              <li> - Препроцессоры: less scss stylus(примеси переменные)</li>
              <li> - CSS мобули и нативные переменные</li>
              <li> - Post css</li>
              <li> - css in js и styled components</li>
              <li> - BEM OOCSS SMACSS</li>
            </ul>

          </p>
        </ListItem>
        <ListItem>
          <p className='block'>
            <b className='head'>
              JavaScript
            </b>

            <p>
              Большой опыт работы на JavaScript от простых перменных и циклов до Proxy Promise AsyncAwait и тд.
              Довольно много писал на нативнов JavaScript поэтому хорошо знаю методы DOM и BOM так же активно изучаю
              новые
              стандартны языка и стараюсь применять в боевых проектах в частности For Await Of новый оператор '??',
              классы и тд.
            </p>

            <p>
              Так же активно изучаю алгоритмны и большую О нотацию, когда есть возможность стараюсь привести все
              алгоритмны к
              скорости выполнения O(nlogn)
            </p>

            <p>
              <b>
                Так же есть опыт работы с:
              </b>
            </p>

            <ul>
              <li> - EcmaScript 5/7/8/9</li>
              <li> - DOM/BOM написание скрипто так же async defer</li>
              <li> - Прототипы наследование, es5 функции конструкторы, es6 классы</li>
              <li> - Понимание и использование ООП</li>
              <li> - Типы данных область видимости, замыкания, контекст, асинхронная модель JS (event loop)</li>
              <li> - Canvas или SVG API</li>
              <li> - Умение и желание писать тесты</li>
            </ul>

          </p>
        </ListItem>
        <ListItem>
          <p className={'block'}>
            <b className={'head'}>
              React.js
            </b>

            <p>
              Основной интурсмент на котором я работаю, довольно хорошо изучил и знаю какие плюсы и какие минусы.
              Использовал большентсво инструментов из окружения react.js в частности:
            </p>

            <ul>
              <li> - Stateless / stateful order компонеты</li>
              <li> - Components and Props</li>
              <li> - State and Lifecycle методы</li>
              <li> - Context, Context.provider</li>
              <li> - Portal, Fragment, Error boundaries</li>
              <li> - Refs и DOM в реакте</li>
              <li> - Использование хуков в функционлаьных комопнентов</li>
              <li> - TypeScript / Flow для React.js</li>
              <li> - Redux / Mobx / Recoil</li>
              <li> - Redux: redux, react-redux, redux-saga, reselect</li>
              <li> - Окружение webpack, css-modules, stylus/scss, легко соберу webpack для react / vue с нуля</li>
              <li> - Использование библиотек UI-компонент: Ant design, material UI, bootstrap</li>
              <li> - Graphql (apollo)</li>
              <li> - Unit тестирование</li>
            </ul>

          </p>
        </ListItem>

        <ListItem>
          <p className={'block'}>
            <b className={'head'}>
              Node.js
            </b>

            <p>
              Так же очень инетерсует разработка на Node.js, уже работал в боевых проектах на Node.js написани api на
              микросерверной архитектуре, так же был опыт создания разовых проектов в которых приобрел опыт:
            </p>

            <ul>
              <li> - Работы с микросерверсной архитектурой</li>
              <li> - Express.js</li>
              <li> - Продумывания DTO планировка контрактов между микросервесами</li>
              <li> - MongoDB, Postrgess</li>
              <li> - Postrgess + TypeORM</li>
            </ul>

          </p>
        </ListItem>

      </ContentBlock>
  )
}

export default Skills
