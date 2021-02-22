import React from 'react'
import {ReactComponent as UserIcon} from "../../common/icons/user-icon.svg";
import ListItem from "../../ListItem";
import ContentBlock from "../../ContentBlock";

const AboutMe = () => {
  return (
      <ContentBlock title={'About me'} icon={<UserIcon/>}>
        <ListItem>
          <p>
            Легко нахожу общий язык с коллективом. Мне нравится быть в атмосфере развития и испытывать
            Разработчики
            Заинтересованы в полнофункциональной разработке, в частности интерфейсных технологий Node.js, также заинтересованы в
            реагируя на родной
            и Electron.js и
            Flutter
            в случае необходимости готов наставлять команду.
          </p>
          <ul>
            <div> Чего я жду от работы: </div>
            <li> - Опытные коллеги-разработчики, которым есть чему поучиться. </li>
            <li> - поток проектов, которыми не стыдно похвастаться </li>
            <li> - Отлаженная система постановки задач (отлично, если вы работаете через CRM) </li>
            <li> - Возможность применять новые инструменты в проектах (отлично, если вы регулярно обмениваетесь знаниями / тренингами). </li>
            <li> - Человеческие отношения </li>
            <li> - Конкурентоспособная заработная плата. </li>
          </ul>
          <p>
            Географически я сейчас нахожусь в Бишкеке (Кыргызстан). Поэтому предпочтительнее
            Способ проведения собеседования для меня будет - видеозвонок по скайпу. Однако, если личное интервью
            строго необходимо могу спланировать поездку в Москву (заранее).
            Вы можете написать мне заранее
            в <a target={'blank'} href="https://join.skype.com/invite/s96cb3Y4FgAn">skype</a> {' or '}
            <a target={'blank'} href="mailto:quadrad4@gmail.com">mail</a>{' or '}
            <a target={'blank'} href="https://t.me/Quadrad_s">telegram</a>.
          </p>
        </ListItem>

      </ContentBlock>
  )
}

export default AboutMe
