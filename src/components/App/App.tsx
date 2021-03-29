import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import { Spacer } from '../../containers/Spacer/Spacer';
import Divider from "../Divider/Divider";

const App : React.FC = () => {
  return (
    <div>
      <Navbar/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <AboutMe/>
      {/*Spacer*/}<Spacer divHeight={30}/>
      <Divider/>
    </div>
  );
}

export default App;
