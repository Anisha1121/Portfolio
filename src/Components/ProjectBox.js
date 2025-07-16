import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
   

    scribbleNsenseDesc:"Scribblytics is an AI-based web app that interprets canvas-drawn handwritten math expressions and visual concepts in real time. It uses Gemini Vision API (Google AI) to solve and classify inputs, rendering output via MathJax with an interactive UI. Built with React (Vite), FastAPI, and Axios, supporting draggable outputs and export-to-image features. Deployed on Vercel and designed for intuitive use by students, educators, and visual thinkers.",
    scribbleNsenseGithub:"https://github.com/shailendra-iiitm/scribbleNsense",
    scribbleNsenseWebsite:"https://scribble-n-sense.vercel.app/",

    ZipNGoDesc:"ZipNGo is an AI-powered travel planning platform that generates personalized itineraries based on destination, budget, duration, and traveler count. It leverages Gemini Pro (Google AI) for prompt-based trip suggestions and Mapbox for interactive location and route visualization. Built with React (Vite), Tailwind CSS, and real-time data handling via Firestore. Deployed on Vercel with a modular UI and reusable component architecture.",
    ZipNGoGithub:"https://github.com/Anisha1121/ZipNGo",
    ZipNGoWebsite:"https://zip-n-go.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox