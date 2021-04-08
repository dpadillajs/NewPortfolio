import React from 'react';
import './App.css';
import { Spacer } from '../../containers/Spacer/Spacer';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import Overview from "../Overview/Overview";
import WorkHistory from "../WorkHistory/WorkHistory";
import ProjectHighlights from "../ProjectHighlights/ProjectHighlights";
import Footer from "../Footer/Footer"

const App : React.FC = () =>
    <>
      <Navbar/>
      {/*Spacer*/}<Spacer divHeight={80}/>
      <AboutMe/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <TechnicalSkills/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Overview/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <WorkHistory/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <ProjectHighlights/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Footer/>
    </>

export default App;
