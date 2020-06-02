import React from 'react'
import {ReactComponent as UserIcon} from "../common/icons/user-icon.svg";
import ListItem from "../ListItem";
import ContentBlock from "../ContentBlock";

const AboutMe = () => {
  return(
      <ContentBlock title={'Обо мне'} icon={<UserIcon/>}>
        <ListItem>
          <p>
            Легко нахожу общий язык с командой. Люблю находиться в атмосфере разработке и опытных разработчиков
            Интересует full-staсk разработка в частности Node.js, front-end технологии, так же интересует react native
            и Electron.js и
            Flutter
            при необходимости готов заниматься менторством в комнаде.
          </p>
          <ul>
            <div>Чего я жду от работы:</div>
            <li>- Опытных коллег разработчиков, у которых есть чему поучиться</li>
            <li>- Поток проектов, которыми не стыдно похвалиться</li>
            <li>- Налаженная система постановки задач (здорово если работаете через CRM)</li>
            <li>- Возможность применять новые инструменты в проектах (здорово если регулярно проводите обмен
              знаниями/обучение)
            </li>
            <li>- Человеческое отношение</li>
            <li>- Конкурентная оплата труда</li>
          </ul>
          <p>
            Территориально я сейчас в Бишкеку (Кыргызстан). Потому предпочтительным
            способом проведения собеседования для меня будет - видеозвонок в скайпе. Однако, если очное собеседование
            строго необходимо, я могу спланировать свою поездку в Москву (сильно заранее).
            Можно написать мне предварительно
            в <a target={'blank'} href="https://join.skype.com/invite/s96cb3Y4FgAn">скайп</a> {' '}
            <a target={'blank'} href="mailto:quadrad4@gmail.com">почту</a> или {' '}
            <a target={'blank'} href="https://t.me/Quadrad_s">телеграм</a>.
          </p>
        </ListItem>

      </ContentBlock>
  )
}

export default AboutMe
