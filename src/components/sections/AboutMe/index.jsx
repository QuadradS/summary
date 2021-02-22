import React from 'react'
import {ReactComponent as UserIcon} from "../../common/icons/user-icon.svg";
import ListItem from "../../ListItem";
import ContentBlock from "../../ContentBlock";

const AboutMe = () => {
  return (
      <ContentBlock title={'About me'} icon={<UserIcon/>}>
        <ListItem>
          <p>
            I easily find common language with the team. I love being in a development atmosphere and experienced
            developers
            Interested in full-featured development in particular Node.js interface technologies also interested in
            reacting to native
            and Electron.js and
            Flutter
            if necessary he is ready to mentor the team.
          </p>
          <ul>
            <div> What do I expect from work:</div>
            <li> - Experienced fellow developers who have a lot to learn</li>
            <li> - A stream of projects that are not ashamed to boast of</li>
            <li> - Well-established system of setting tasks (great if you work through CRM)</li>
            <li> - Ability to apply new tools in projects (great if you regularly exchange knowledge / training)</li>
            <li> - Human Relations</li>
            <li> - Competitive wages</li>
          </ul>
          <p>
            Geographically I am now in Bishkek (Kyrgyzstan). Therefore preferred
            the way to conduct an interview for me will be - a video call on Skype. However if a face-to-face interview
            strictly necessary I can plan my trip to Moscow (much in advance).
            You can write me in advance
            in <a target={'blank'} href="https://join.skype.com/invite/s96cb3Y4FgAn">skype</a> {' or '}
            <a target={'blank'} href="mailto:quadrad4@gmail.com">mail</a>{' or '}
            <a target={'blank'} href="https://t.me/Quadrad_s">telegram</a>.
          </p>
        </ListItem>

      </ContentBlock>
  )
}

export default AboutMe
