import React from 'react';
import './App.css';
import { Spacer } from '../../containers/Spacer/Spacer';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import TechnicalSkillSet from "../TechnicalSkillSet/TechnicalSkillSet";
import Overview from "../Overview/Overview";
import WorkHistory from "../WorkHistory/WorkHistory";
import ProjectHighlights from "../ProjectHighlights/ProjectHighlights";

const App : React.FC = () => {
  return (
    <div>
      <Navbar/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <AboutMe/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <TechnicalSkillSet/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Overview/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <WorkHistory/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <ProjectHighlights/>
    </div>
  );
}

export default App;
