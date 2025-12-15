import React from 'react'
import fortinet from '../assests/fcac.png';
import Gcp from '../assests/gcp.png';
import googleAd from '../assests/googlead.png';
import Tatadv from '../assests/tatadv.png';
import Ibmcs from '../assests/ibmcs.png';
import Ibmfs from '../assests/ibmfs.jpg'
const Certifications = () => {
  return (
   <div className="certificates">
            <div className="head">
                <h1>My Certificates</h1>
            </div>
           
         <div className="cart">
             <div className="cart1">
                <span><img src={fortinet} alt="Fortinet Cybersecurity"/></span>
                <a href={fortinet} target='_blank'><h1 className="head" >Fortinet Certified in Associate Cybersecurity.</h1></a>
            </div>
            <div className="cart1">
                <span><img src={googleAd} alt="Google App developer intern"/></span>
                <a href={googleAd} target='_blank'><h1 className='head'>Google Android Developer Virtual Internship.</h1></a>
            </div>
            <div className="cart1">
                <span><img src={Gcp} alt="GCP Data Analysis"/></span>
                <a href={Gcp}><h1 className="head">Google cloud Career Readiness Data Analyst Track (GCP).</h1></a>
            </div>
            <div className="cart1">
                <span><img src={Tatadv} alt="TATA DATA VISUALIZATION"/></span>
                <a href={Tatadv} target='_blank'><h1 className="head" >Data Visualisation from TATA Forage.</h1></a>
            </div>
            <div className="cart1">
                <span><img src={Ibmcs} alt="Google Cybersecurity"/></span>
                <a href={Ibmcs} target='_blank'><h1 className="head" >Google Certified in Cybersecurity.</h1></a>
            </div>
            <div className="cart1">
                <span><img src={Ibmfs} alt="IBM FULL STACK"/></span>
                <a href={Ibmfs} target='_blank'><h1 className="head" >IBM Full Stack Developer by Coursera.</h1></a>
            </div>
        </div>
        <div className="data">
        <div><span style={{color:"black"}}>👈 Swipe left / right 👉</span></div>
        </div>
    </div>
  )
}

export default Certifications
