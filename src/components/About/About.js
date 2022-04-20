import './About.css'

const About = () => {
  return (
  	<div className="about-wrapper">
  		<h2>Technologies</h2>
	    <div className="about">
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
  				className="icon"/>
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  				className="icon"/>
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" 
					className="icon bg-white" />
  		  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
  				className="icon bg-white" />
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
  				className="icon bg-white" />
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
  				className="icon" />
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
  				className="icon" />
  			<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  				className="icon" />
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" 
  				className="icon" />
  		</div>
	  </div>
  )
}

export default About