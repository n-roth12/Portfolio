import resume from '../../images/resume_april_2022.pdf'
import './Hero.css'

const Home = () => {
  return (
    <div className="hero-wrapper" id="ohero">
      <div className="hero">
{/*        <div className="portrait-wrapper">
          <img src={image} className="portrait" alt="headshot" />
        </div>*/}
        <div className="header">
          <h1>Nolan Roth</h1>
          <hr />
          <h2>Back-End Software Developer</h2>
        </div>
        <div className="bio-wrapper">
    			<p className="bio">
    				Hello, I am a web developer specializing in building web applications with Python and React.js.
            I recently completed my first internship as a software developer, and am looking for an 
            opportunity to apply and grow my skills as a developer. Through my internship experience
            and building my own web applications, I have learned how to create a software system from 
            frontend to backend using good programming practices.
    			</p>
        </div>
        <div className="contact">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/nolan-roth/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/n-roth12">Github</a>
            </li>
            <li>
              <a href={resume}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home