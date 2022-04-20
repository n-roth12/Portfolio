import './Experience.css'

const Experience = () => {
  return (
    <div className="experience-wrapper">
    	<h2>Experience</h2>
    	<div className="experience">
    		<div className="experience-header">
    			<h3>Software Engineering Intern (Relaymile Inc.)</h3>
    			<h3>1/2022 - 4/2022</h3>
    		</div>
    		<p className="experience-desc">Relaymile is a logistic network startup creating innovative tools for supply chain 
    			management. I worked a three-month internship, where I worked primarily on the 
    			backend of the company web application, while sometimes working on the frontend
    			when needed. My experience included:</p>
    		<ul className="experience-list">
    			<li>Developing and improving backend Restful APIs and other services with Flask and PostgreSQL</li>
    			<li>Leading the development of a document storage and sharing feature for our clients using AWS S3</li>
    			<li>Responsibility for deploying codebase to development and production server instances hosted with 
    				AWS EC2, as well as troubleshooting server issues</li>
    			<li>Working closely with management in order to implement business logic as code, as well as 
    				brainstorming solutions to new problems</li>
    			<li>Assisting frontend team by creating or modifying React frontend components</li>
    		</ul>
  			<ul className="tools">
  				<li>Python</li>
  				<li>JavaScript</li>
  				<li>Flask</li>
  				<li>React</li>
  				<li>PostgreSQL</li>
  				<li>AWS</li>
  			</ul>
    	</div>
    </div>
  )
}

export default Experience