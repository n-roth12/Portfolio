import resume from '../../images/resume_april_2022.pdf'
import './Navbar.css'

const Navbar = () => {
  return (
  	<nav id="hero">
			<h1 className="name">Nolan's Portfolio</h1>
  		<ul className="nav-items">
				<li>
					<a href="#projects" className="nav-item">Projects</a>
				</li>
				<li>
					<a href={resume} className="nav-item">Resume</a>
				</li>
			</ul>
		</nav>
  )
}

export default Navbar