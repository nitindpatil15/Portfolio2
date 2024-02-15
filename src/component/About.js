import React from 'react'
import Nitin1 from './Nitin1.jpg'

const About = () => {
  return (
    <>
    <div className="container d-flex my-5" >
      <div className="container my-5 Nitin_Img " >
        <img src={Nitin1} alt="Nitin_Img" className='my-5' style={{width:"70%", borderRadius:"40%" , boxShadow:"5px 5px 20px black", minWidth:"300px"}}/>
      </div>
      <div className="container my-5">
    <div className="text-secondary my-5" style={{fontSize:"4vh"}}> A Third-year B.Tech student at   GF's Godavari College of Engineering Jalgaoan,
                      specializing in 'Computer Engineering'. <br />  My journey in tech began with a fascination for
                    [e.g., 'how apps on our phones worked'], and today, it's turned into a passionate pursuit of
                    knowledge and hands-on application.    
                    <br />
                    Skill-wise, I'm proficient in  Technical Skills [ e.g., ' C ' , ' C++ ' , ' HTML ', ' CSS ' , '
                    JS ' ].  Beyond coding, I'm a firm believer in [Soft Skill e.g., 'team collaboration'], having
                    worked in diverse teams for college tech-fests and hackathons.  
                    </div>
    </div>
    </div>
    </>
  )
}

export default About
