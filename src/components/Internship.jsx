import React from 'react'
import Wadhwani from '../assests/intern1wd.png';
import Voc from '../assests/intern2voc.png'
import Ibmai from '../assests/intern3ibmai.png';

const Internship = () => {
  return (
     <div className="internships" >
            <div className="head">
                <span>My Internships</span>
            </div>
            <div className="carts">
                <span><img src={Ibmai}  alt="IBM AI&CLOUD INTERN"/></span>
                <div>
                    <a href={Ibmai} target='_blank'><h1  className="head">IBM SKILLBUILD - AI & CLOUD COMPUTING INTERNSHIP</h1></a>
                    <p className="bold">15 Jul - 7 Aug 2025</p>
                </div>
                    <ul>
                    <li>Developed strong analytical skills through collaborative tasks and assignments.</li>
                    <li>Certified training in LLM's, Cloud Computing, and AI fundamentals with hands-on real-time projects.</li>
                    <li>Gained practical experience with IBM Cloud services, Watson AI tools, and cloud-based application deployment.</li>
                    </ul>
            </div>
            <div className="carts">
                <span><img src={Voc} alt="IBM Cloud"/></span>
                <div>
                    <a href={Voc} target='_blank'><h1 className="head">Vault of codes - Google Support For Education</h1></a>
                    <p className="bold">05 Feb - Mar 2025</p>
                </div>
                    <ul>
                        <li>40 days of Certified Proficiency Training in Web Development.</li>
                        <li>Built responsive UIs using HTML, CSS (Bootstrap), JavaScript.</li>
                        <li>Demonstrated Strong Problem - solving and Team work skills.</li>
                        <li>Hands on Experience and Practical Knowlege on Rale Time Projects and Assignments</li>
                    </ul>
            </div>
             <div className="carts">
                <span><img src={Wadhwani} alt="Wadhwani Intern JobReady skills"/></span>
                <div>
                    <a href={Wadhwani} target='_blank'><h1 className="head">WadhWani- Employability Job Ready Skill Internship</h1></a>
                    <p className="bold">Oct - Dec 2024</p>
                </div>
                    <ul>
                        <li>Completed a 10-week virtual internship focused on core employability skills, professional communication, teamwork, and workplace problem-solving.</li>
                        <li>Worked on real-time assignments and industry-oriented tasks, improving critical thinking and job-readiness.</li>
                        <li>Developed strong collaboration, presentation, and productivity skills through structured training and assessments.</li>
                    </ul>
            </div>
        
        </div>
  )
}

export default Internship
