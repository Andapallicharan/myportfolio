import React from 'react'
import Navbar from './Navbar'
import Skills from './Skills'
import Internship from './Internship'
import Qualifications from './Qualifications'
import Certifications from './Certifications'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import profie from '../assests/charanpic.jpg';
import resume from '../assests/charanResume.pdf'
const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div className="main">
            <div className="leftc">
                <div>
                <span>Hi,I'm</span>
                <h1>Charan Andapalli</h1>
                <p>Front-End Developer & A Java Programmer</p>
                <span>I turn ideas into interactive experiences.</span>
                <div className="btns"> 
                <button><a href={resume} download="resume">Download CV</a></button>
                <button><Link to="/feedback">Feedback form</Link></button>
                </div>
                </div>
            </div>
            <div className="leftc">
                <img src={profie} alt="profilePic" />
            </div>
        </div>
        <div className="container">
            <div>
                 <div>
                <h1 className='bold'>4 years</h1>
                <span className='head'>Coding Experience</span>
            </div>
            <div>
                <h1 className='bold'>10+ Projects</h1>
                <span className='head'>Completed</span>
            </div>
            <div>
                <h1 className='bold'>Support</h1>
                <span className='head'>24 ✘ 7</span>
            </div>
            </div>
        </div>
        <div className="about">
            <div className="leftc">
                <img src="https://tse4.mm.bing.net/th/id/OIP.c04hRSmF5pa2LDSKDtFaGwHaFj?pid=Api&P=0&h=180" alt="AC"/>
            </div>
            <div className="right2">
                <h1 className='head'>About me</h1>
                <span>  My Intro</span>
                <p style={{fontSize:"12px"}}>I’m Charan, a B.Tech graduate from CMR Technical Campus with a strong academic background. I’m skilled in HTML, CSS, JavaScript, React, Java and SQL, and also trained in data analytics using Power BI, Excel, and Python. I’m passionate about using technology to solve real-world problems and constantly improving my skills. I’m eager to apply my knowledge in a professional environment and contribute to meaningful projects.</p>
                <div className="data" >
                    <div >
                        <span  style={{fontSize:"12px"}}>Name</span><span  style={{fontSize:"12px"}}>:</span><span  style={{fontSize:"12px"}}>A.Charan</span>
                    </div>
                    <div>
                        <span  style={{fontSize:"12px"}}>Phone</span><span  style={{fontSize:"12px"}}>:</span><span  style={{fontSize:"12px"}}>9391402213</span>
                    </div>
                    <div>
                        <span  style={{fontSize:"12px"}}>Email</span><span  style={{fontSize:"12px"}}>:</span><span  style={{fontSize:"12px"}}>charanandapalli@gmail.com</span>
                    </div>
                    <div className="interests">
                        <h1 className='head'>My Interests</h1>
                        <div>
                            <span className='bold'>Music</span><span className='bold'>Travel</span><span className='bold'>Movies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Skills/>
        <Internship/>
        <Qualifications/>
        <Certifications/>
        <div className="marque">
            <marquee behavior="scroll" direction="left" loop scrollamount="20">
                <h1>I  AM  LOOKING  FOR  A  ROLE  WHERE  I  CAN  PITCH  MY  IDEAS  ALONG  WITH  BEING  MENTORED  TOWARDS  A  SUCCESSFUL  CAREER. I  WANT  TO  GET  AN  OPPURTUNITY  WHERE  I  CAN  LEARN ,  IMPROVE MYSELF,  SHOWCASE  MY  SKILLS  AS  WELL  AS  CONTRIBUTE  TO  AN  ORGANISATION'S  GROWTH.  I  CONSIDER  MYSELF  HARWDWORKING,  PUNCTUAL,  ORGANISED  WHO  CAN  WORK  WITH  MULTIPLE  PRIORITIES  WITH  A  POSITIVE  ATTITUDE.</h1>
            </marquee>
        </div>
        <Contact/>
    </>
    
  )
}

export default Home
