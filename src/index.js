import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './css/style.css';
import Header from './component/Header';
import Section from './component/Section.js';
// import * as serviceWorker from './serviceWorker';

const data = [
  {
    about: "about",
    contact: "contact",
    skill: "skill",
    portofolio : "portofolio",
    logo: "AshariFauzan"
  }
];

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <Header
      about = {data[0].about}
      contact = {data[0].contact}
      skill = {data[0].skill}
      portofolio = {data[0].portofolio}
      logo = {data[0].logo}
      />
    <Section
      link = {data[0].about}
      wave = 'wave'
      />
    <Section
      link = {data[0].contact}
      />
    {/*}<Section
      link = {sectionLink[2]}
      />
    <Section
      link = {sectionLink[3]}
      />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more contact Contact workers: https://bit.ly/CRA-PWA

// serviceWorker.register();
