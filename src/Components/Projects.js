import React from 'react';
import ProjectBox from './ProjectBox';
import scribbleNsense from '../images/scribbleNsense.png';

import ZipNGo from '../images/ZipNGo.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'> <b>My Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ZipNGo} projectName="ZipNGo" />
        <ProjectBox projectPhoto={scribbleNsense} projectName="scribbleNsense" />
        
      </div>

    </div>
  )
}

export default Projects