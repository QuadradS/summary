import React from 'react'
import ContentBlock from "../../ContentBlock";
import {ReactComponent as WorkIcon} from "../../common/icons/work-icon.svg";
import ListItem from "../../ListItem";

const Experience = () => {
  return (
      <ContentBlock title={'Опыт работы'} icon={<WorkIcon/>}>
        <ListItem>
          <div className='block'>
            <b className='head'>
              Фриланс
            </b>

            <p>
              Начало карьеры, научился верстать в срок, общению с незнакомыми людьми, научился договариваться (не
              всегда) о цене и сроках. В общем начало карьеры когда перестал верстать свои простые странички и начал
              выполнять заказы.
            </p>

            <p>
              <b>06.2016 - 01.2017</b>
            </p>

            <ul>
              <li> - Верстал адаптивную кроссбраузерную верстку</li>
              <li> - Использовал scss less и прочие препроцессоры</li>
              <li> - Работал с pug-jade препроцессором для html</li>
              <li> - Использовал JQuery и не много писал на чистом JavaScript</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Aliton.ru
            </b>

            <p>
              Первый мой опыт работы на компанию, работал по часовой оплате но каждый день обязан был быть на связи 3 -
              4 часа. Очень нравилась работа. Сайт был на wordpress, делал правки старых страниц, верстал новые и
              натягивал на wp. Это был мой первый опыт с "Легаси кодом" и довольно большим объемом. Работал с дизайнером
              в паре.
            </p>

            <p>
              <b>01.2017 - 04.2017</b>
            </p>

            <ul>
              <li> - Верстал адаптивную кроссбраузерную верстку</li>
              <li> - Верстка под wp и частичная натяжка на движок</li>
              <li> - Работал с pug-jade препроцессором для html</li>
              <li> - Написание скриптов на JavaScript</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Svetofor
            </b>

            <p>
              Первый мой опыт работы в офисе, место где я научился методологии Agile и Scrum. Работал в команде с
              верстальщиков, ceo,back-end программистом и дизайнером. Так же поддержка старого и верстка и установка
              верстки на cms CS-Card.
            </p>

            <p>
              <b>04.2017 - 06.2017</b>
            </p>

            <ul>
              <li> - Верстал адаптивную кроссбраузерную верстку</li>
              <li> - Верстка под OpenCard</li>
              <li> - Написание более сложных скриптов на JavaScript</li>
              <li> - Оптимизация страниц под SEO</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Grooni
            </b>

            <p>
              Верстка, установка на wp. Создание адаптивных тем и плагинов. Кастомный ajax и импорт его в wp. Место где
              я научился pixel-perfect верстки где каждый 2-3 пикселя имеют значение.
            </p>

            <p>
              <b>06.2017 - 08.2017</b>
            </p>

            <ul>
              <li> - Верстал адаптивную кроссбраузерную pixel-perfect верстку</li>
              <li> - Верстка под WordPress</li>
              <li> - Написание более сложных скриптов на JavaScript для запросов на бэк</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Zensoft
            </b>

            <p>
              Разработка сложный SPA, командная разработка. Поддержка легаси кода и написание нового проекта в команде с
              нуля.
              Работа в коллективе с Back-end, Front-End, Mobile разработчиками, PM - менеджером и QA. В этой компании я
              очень хорошо прокачался как
              JavaScript разработчик. Удалось так же по работать в проекте тимлидом в команде было 12 фронтистов и PM
              менеджер.
            </p>

            <p>
              <b>08.2017 - 09.2019</b>
            </p>

            <ul>
              <li> - Написание фронт - енда на React.js</li>
              <li> - Работал с GraphQL и JSON API</li>
              <li> - Работал с Redux</li>
              <li> - Разработка велась на Typescript</li>
              <li> - По работал с Mobx</li>
              <li> - Был очень интересный опыт работы с визуализацией данных на D3.js</li>
              <li> - Писал API на Node.js и затем так же использовал его на фронте</li>
              <li> - Написание тесов для бэка и для фронта</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              Yurtah
            </b>

            <p>
              Разработка фронт - енда для американского стартапа по продажи недвижимости. В этом проекте получил опыт работы
              с SEO оптимизацией, работой кастомным SSR для React. Так же по работал с Redux-Saga.
            </p>

            <p>
              <b>01.2018 - 09.2019</b>
            </p>

            <ul>
              <li> - Оптимизация страниц для лучшей скорости загрузки</li>
              <li> - Работал с SEO: OG метки, validation schema, seo текста и meta-tags</li>
              <li> - Работал с Redux-Saga</li>
            </ul>

          </div>
        </ListItem>

        <ListItem>
          <div className='block'>
            <b className='head'>
              UI Giants
            </b>

            <p>
              Разработка фронт - енда для американского стартапа по продажи недвижимости. В этом проекте получил опыть работы
              с SEO оптимизацией, работой кастомным SSR для React. Так же по работал с Redux-Saga.
            </p>

            <p>
              <b>01.2018 - 09.2019</b>
            </p>

            <ul>
              <li> - Оптимизация страниц для лучшей скорости загрузки</li>
              <li> - Работал с SEO: OG метки, validation schema, seo текста и meta-tags</li>
              <li> - Работал с Redux-Saga</li>
            </ul>

          </div>
        </ListItem>
      </ContentBlock>
  )
}

export default Experience
