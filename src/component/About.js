import React from 'react'
import Nitin1 from './Nitin1.jpg'

const About = () => {
  return (
    <>
    <div className="container d-flex my-5">
      <div className="container my-5 Nitin_Img">
        <img src={Nitin1} alt="Nitin_Img" style={{width:"40%", borderRadius:"40%" , boxShadow:"5px 5px 20px black"}}/>
      </div>
      <div className="container my-5">
    <div className="text-secondary"> A Third-year B.Tech student at   GF's Godavari College of Engineering Jalgaoan,
                      specializing in 'Computer Engineering'.   My journey in tech began with a fascination for
                    [e.g., 'how apps on our phones worked'], and today, it's turned into a passionate pursuit of
                    knowledge and hands-on application.    

                    Skill-wise, I'm proficient in  [Technical Skills, e.g., ' C ' , ' C++ ' , ' HTML ', ' CSS ' , '
                    JS ' ].  Beyond coding, I'm a firm believer in [Soft Skill e.g., 'team collaboration'], having
                    worked in diverse teams for college tech-fests and hackathons.  </div>
    </div>
    </div>
    </>
  )
}

export default About
