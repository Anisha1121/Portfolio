import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anisha Dwivedi</h4>
      <h4>Copyright &copy; 2025 AD</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Anisha1121" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anishadwivedi1121/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anishas1121@gmail.com" target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/anishas1121/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer 