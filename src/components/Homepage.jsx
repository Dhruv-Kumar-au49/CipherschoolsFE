import React from 'react'
import '../Style/homepage.css'
function Homepage() {
  return (
    <div>
      <h1 className='homepage-heading'>
        Welcome to the Future of Learning!
      </h1>

      <p className='about'>
        Cipherschools is a bootstrapped educational video streaming platform in India that is connecting passionate unskilled students to skilled Industry experts to fulfill their career dreams.
      </p>

      <div className='founder'>
        <img src="https://ik.imagekit.io/cipherschools/Anurag_Mishra_tFt53KUoRwS.jpg?updatedAt=1633176857607" alt="anurag"/>
        <h2>Anurag Mishra</h2>
<p className='about-founder'><b>Founded</b>: CipherSchools(bootstrapped online learning platform), which is helping students learn skills needed for the future.</p>
      </div>

      <button className='courses-btn'>
  <a href='https://www.cipherschools.com/courses' target='_blank' rel='noopener noreferrer'>
    Expolore Courses
  </a>
</button>

    </div>
  )
}

export default Homepage
