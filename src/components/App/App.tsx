import React from 'react';
import './App.css';
import { Spacer } from '../../containers/Spacer/Spacer';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import TechnicalSkillSet from "../TechnicalSkillSet/TechnicalSkillSet";
import Overview from "../Overview/Overview";
import WorkHistory from "../WorkHistory/WorkHistory";
import ProjectHighlights from "../ProjectHighlights/ProjectHighlights";
import Footer from "../Footer/Footer"

const App : React.FC = () => {
  return (
    <div>
      <Navbar/>
      {/*Spacer*/}<Spacer divHeight={80}/>
      <AboutMe/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <TechnicalSkillSet/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Overview/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <WorkHistory/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <ProjectHighlights/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Footer/>
    </div>
  );
}

export default App;
