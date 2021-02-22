import React from 'react'
import ContentBlock from "../../ContentBlock";
import {ReactComponent as WorkIcon} from "../../common/icons/work-icon.svg";
import ListItem from "../../ListItem";

const Experience = () => {
  return (
      <ContentBlock title={'Work experience'} icon={<WorkIcon/>}>
        <ListItem>
          <div className='block'>
            <b className='head'>
              Freelance
            </b>

            <p>
              В начале карьеры научился работать и вовремя отвечать незнакомым людям, научился
              договариваться (не всегда) о цене и сроках. В общем начало моей карьеры когда я перестал
              верстал мои простые страницы и начал выполнять заказы.
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
              Мой первый опыт работы в компании работал на почасовой основе, но каждый день приходилось быть на связи.
              3-4 часа. Работа очень нравилась. Сайт был на wordpress, я редактировал старые страницы, делал новые
              и сажал на wp. Это был мой первый опыт работы с Legacy Code и довольно большим объемом. Работал
              в паре с дизайнером.
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
              Мой первый опыт работы в офисе - это место, где я изучил методологию Agile и Scrum. Работал
              в команде с верстальщиками ceo, back-end программистом и дизайнером. Также поддержка старой верстки
              и макет установки на cms CS-Card.
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
              Установка макета на wp. Создание адаптивных тем и плагинов. Пользовательский ajax и импорт его в wp.
              Место, где я научился макету с идеальным пикселем, где каждые 2-3 пикселя имеют значение.
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
              Комплексная разработка СПА - это командная разработка. Поддержка устаревшего кода и написание нового проекта в команде.
              Совместная работа с Back-end Front-End Mobile разработчиками PM - менеджером и QA. В этой компании я
              очень хорошо прокачался как JavaScript разработчик. Мне также удалось поработать в проекте как team lead
              В команде было 12 фронталистов и ПМ.
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
              Front - end разработка для американского стартапа в сфере недвижимости. Есть опыт работы над этим проектом SEO
              оптимизирован с помощью специального SSR для React. Я также работал с Redux-Saga.
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
              Front - end разработка проекта а так seo и мобильная оптимизация
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
              Разработка фронта и подключение к back-end части
            </p>

            <p>
              <b>05.2020 - Current place of work</b>
            </p>

          </div>
        </ListItem>
      </ContentBlock>
  )
}

export default Experience
