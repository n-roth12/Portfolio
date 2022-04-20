import image1 from "../../images/image1.png"
import image2 from "../../images/image2.png"
import './Projects.css'

const Projects = () => {
  return (
  	<div className="projects-wrapper" id="projects">
			<h2 className="">Projects</h2>
			<div className="projects">

				<div className="project-card">
					<a href="https://ffbproject.herokuapp.com/">
						<img src={image1} alt="Project 1" />
					</a>
					<div className="description">
						<h3>Fantasy Draft Assistant</h3>
						<p className="">A web application to help fantasy football players with their drafts</p>
						<ul className="tools">
							<li>Python</li>
							<li>Flask</li>
							<li>JavaScript</li>
							<li>PostgreSQL</li>
							<li>Bootstrap</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Heroku</li>
						</ul>
						<p className="github-link">
							<a href="https://github.com/n-roth12/FFB-Draft-App">Github Repo</a>
						</p>
					</div>
				</div>

				<div className="project-card">
					<a href="https://ffbrestapi.herokuapp.com/">
						<img src={image2} alt="Project 2" />
					</a>
						<div className="description">
							<h3>Fantasy Football API</h3>
							<p>A REST API for retrieving statistics about fantasy football perfomances</p>
							<ul className="tools">
								<li>Python</li>
								<li>Flask</li>
								<li>PostgreSQL</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Heroku</li>
							</ul>
							<p className="github-link">
								<a href="https://github.com/n-roth12/Football-REST-API">Github Repo</a>
							</p>
						</div>
				</div>

			</div>
		</div>
  )
}

export default Projects