import React from 'react';
import '../../styles/Resume.css';
import resume from '../../assets/resume/resume.pdf';

export default function Resume() {
  return (
    <div className='main3'>
      <center><h2>My Resume</h2></center>
      <center><p>Please click here to download my resume:</p></center>
      <center><a href= { resume } download>Resume</a></center>
    </div>
  );
}
