import React from 'react';
import logo from './assets/me.png';
import './App.sass';

function Heading(props: {text?: string}) {
  return (
    <div className={'heading'}>
      { props.text ? <span>{props.text}</span> : null }
      <div className={'decoration'}></div>
    </div>
  )
}

function CompanyDetails(props: {name: string, position: string, duration: string, work: string[]}) {
  return (
    <div className={'company-details'}>
    <div>
      <span className={'company'}>{props.name}</span>
      <span className={'position'}>{' - ' + props.position}</span>
    </div>
    <div>
      <span className={'duration'}>{props.duration}</span>
    </div>
    <ul>
      {props.work.map((detail) => <li>{detail}</li>)}
    </ul>
  </div>
  )
}

function App() {
  return (
    <div className="app">
      <header>
        <div className={'card'}>
          <h1>EFE BUYURAN</h1>
          <h2>Sn. Front-End Developer</h2>
          <img alt={'me'} src={logo} />
          <h3>efebuyuran@gmail.com</h3>
        </div>
        <div className={'welcome-message'}>
          <svg className={'quote-marks'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 27">
            <path d="m13.6,0v2.15c-3.08,1.6-5.29,3.27-6.62,5-1.33,1.73-2,3.64-2,5.73,0,1.19.17,2.02.5,2.51.33.49.73.73,1.18.73s1.07-.13,1.84-.39c.77-.26,1.47-.39,2.1-.39.74,0,1.43.14,2.07.42.65.28,1.22.67,1.71,1.18.49.51.87,1.09,1.16,1.75.28.66.42,1.38.42,2.15,0,.84-.18,1.63-.53,2.38-.35.75-.82,1.4-1.42,1.94-.6.54-1.31.98-2.15,1.31-.84.33-1.73.5-2.68.5-1.16,0-2.28-.27-3.39-.81-1.1-.54-2.08-1.28-2.94-2.22-.86-.94-1.55-2.06-2.07-3.35-.53-1.29-.79-2.67-.79-4.13,0-1.74.31-3.45.92-5.13.61-1.67,1.5-3.24,2.65-4.68,1.16-1.45,2.57-2.74,4.25-3.87,1.68-1.13,3.61-2.05,5.78-2.75Z" />
            <path d="m31.48.16v1.99c-1.79,1.05-3.25,2.01-4.38,2.88-1.14.87-2.02,1.74-2.65,2.59-.63.86-1.06,1.74-1.29,2.64-.23.91-.34,1.9-.34,2.98,0,1.01.19,1.75.58,2.22.38.47.79.71,1.21.71.38,0,.96-.14,1.73-.42.77-.28,1.54-.42,2.31-.42.7,0,1.37.14,2.02.42.65.28,1.22.65,1.71,1.12.49.47.88,1.04,1.18,1.7.3.66.45,1.36.45,2.09,0,.84-.18,1.64-.55,2.41-.37.77-.87,1.44-1.5,2.01-.63.58-1.37,1.04-2.21,1.39-.84.35-1.75.52-2.73.52-1.16,0-2.28-.26-3.36-.78-1.09-.52-2.05-1.26-2.89-2.2-.84-.94-1.51-2.05-2.02-3.32-.51-1.27-.76-2.64-.76-4.11,0-1.81.31-3.58.92-5.31.61-1.73,1.5-3.3,2.65-4.74,1.16-1.43,2.56-2.69,4.23-3.79,1.66-1.1,3.56-1.96,5.7-2.59Z" />
          </svg>
          <p className={'hello'}>
            <span>Hello!</span>
          </p>
          <p>
            <span>
              I'm a <strong>Sn. Front-End Developer</strong> from <strong>Istanbul with 8 years of
              experience</strong>, specializing in building modern user interfaces by 
              <strong> React & TypeScript</strong> with a strong emphasis on aesthetics.
            </span>
          </p>
          <p>
            <span>
              Having worked across products used by millions of people,
              I'm looking to utilize this experience to create new and
              exciting apps. I've worked for companies such as <strong>Riot Games</strong>,
              Spinmatic Entertainment, Hyundai, and Huawei. I’m only
              considering <strong>remote</strong> options at the present.
            </span>
          </p>
          <p>
            <span>
              I believe in honesty, teamwork, and positivity for an efficient
              work environment. While being <strong>open to feedback</strong>, 
              <strong> accepting responsibility</strong>, and <strong>attention 
              to detail</strong> are my secret superpowers.
            </span>
          </p>
        </div>
      </header>
      <main>
        <Heading text={'PROFESSIONAL EXPERIENCE'} />
        <CompanyDetails 
          name={'GrubTech'}
          position={'Sn. Software Engineer'}
          duration={'Remote ~ Feb. 2022 - Nov. 2022'}
          work={['Worked on Cloud Kitchen Solutions.']}
        />
        <CompanyDetails 
          name={'Riot Games'}
          position={'Software Engineer'}
          duration={'Istanbul ~ March 2019 - Jul. 2021'}
          work={[
            'Worked on integrating RTL support for League of Legends Client Application. Since this was new to Riot, our team took the initiative to lead RTL support for other Riot services including, Riot Client, Player support hub, and Login services using Javascript, Stylus, and RTLCSS plugin.',
            'Created scalable Single Page Applications to promote in-game store merchandise on League of Legends Client Hub using React, TypeScript and Styled Components.',
            'Integrated an independent streamer to lolesports.com with React',
            'Rebranded LoL Cafe B2B web application (lolcafe.tr.leagueoflegends.com). I was merely responsible for Front-End development but ended up contributing to the design as well.',
            'Supervised development for User Generated Content competition app created with React.'
          ]}
        />
        <CompanyDetails 
          name={'Spinmatic Entertainment'}
          position={'Front-End Developer'}
          duration={'Istanbul ~ Nov. 2017 - Mar. 2019'}
          work={[
            'Worked on the development of a pre-designed mobile app that supports multiple slot games, took responsibility, and delivered a new UX-friendly design with better features using Adobe Tools, React and Redux and SASS.',
            'Setup a paytable app to work inside slot games which supported manual theming for different game designs.'
          ]}
        />
        <CompanyDetails 
          name={'The King Content Creative Agency'}
          position={'Front-End Developer'}
          duration={'Istanbul ~ Apr. 2016 - Nov. 2017'}
          work={[
            'Created Single Page Applications for marketing promotions of Hyundai, Huawei, and Aygaz.',
            'Built websites for small businesses.',
            'Made animated banner ads with HTML5 & CSS.'
          ]}
        />
        <CompanyDetails 
          name={'N’oluyo'}
          position={'Front-End Developer'}
          duration={'Istanbul ~ Sep - Dec 2015'}
          work={[
            'Maintained an existing web platform, fixed bugs, provided UX solutions, implemented new features.',
          ]}
        />
        <CompanyDetails 
          name={'1V1Y'}
          position={'Jnr. Graphic Designer'}
          duration={'Istanbul ~ Feb - Jul 2015'}
          work={[
            'I was responsible from providing page designs for an online magazine that features fashion elements and inspirations.'
          ]}
        />
      </main>
      <div className={'skills'}>
        <div className={'skills-header'}>
          <span>FRONT-END SKILLS</span>
        </div>
        <div className={'skills-body'}>
          <Heading />
          <div className={'skills-body-col'}>
            <ul>
              <li className={'strong'}>
                <span>HTML5</span>
              </li>
              <li className={'strong'}>
                <span>CSS</span>
              </li>
              <li>
                <span>SASS</span>
              </li>
              <li>
                <span>Stylus</span>
              </li>
              <li>
                <span>Styled Components</span>
              </li>
              <li className={'strong'}>
                <span>JavaScript</span>
              </li>
              <li>
                <span>ES6</span>
              </li>
              <li>
                <span>TypeScript</span>
              </li>
              <li>
                <span>React, Redux</span>
              </li>
              <li>
                <span>Restful APIs, GraphQL</span>
              </li>
              <li>
                <span>Mocha, Chai, Sinon</span>
              </li>
            </ul>
          </div>
          <div className={'skills-body-col'}>
            <ul>
              <li className={'strong'}>
                <span>Build Automation</span>
              </li>
              <li>
                <span>NPM & NVM</span>
              </li>
              <li>
                <span>Gulp</span>
              </li>
              <li>
                <span>Webpack</span>
              </li>
              <li className={'strong'}>
                <span>Mobile Development</span>
              </li>
              <li>
                <span>Dart & Flutter</span>
              </li>
              <li className={'strong'}>
                <span>Other</span>
              </li>
              <li>
                <span>Lighthouse</span>
              </li>
              <li>
                <span>Cross-Browser & Platform Compatibility</span>
              </li>
            </ul>
          </div>
          <div className={'skills-body-col'}>
            <ul>
              <li className={'strong'}>
                <span>UI & UX</span>
              </li>
              <li>
                <span>Adobe Photoshop</span>
              </li>
              <li>
                <span>Adobe Illustrator</span>
              </li>
              <li>
                <span>Figma</span>
              </li>
              <li>
                <span>Responsive Design</span>
              </li>
              <li>
                <span>CSS Animations</span>
              </li>
              <li>
                <span>Dynamic SVG</span>
              </li>
              <li>
                <span>Right-To-Left Interfaces</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
