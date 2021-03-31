import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import { Spacer } from '../../containers/Spacer/Spacer';
import SkillSet from "../SkillSet/SkillSet";
import Overview from "../Overview/Overview";

const App : React.FC = () => {
  return (
    <div>
      <Navbar/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <AboutMe/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <SkillSet/>
      {/*Spacer*/}<Spacer divHeight={50}/>
      <Overview/>
    </div>
  );
}

export default App;
