import './Project-list.css'
import { Link } from 'react-router-dom'

function ProjectList() {

  return (
    <div id="Projects">
      <h2 id="project-card-title"> Projects</h2>
      <div id="projects-list">
        <div className="project-item">
          <h4>CloudAEye</h4>
        </div>
        <div className="project-item">
          <h4><Link to='FAM'>FAM</Link></h4>
        </div>
        <div className="project-item">
          <h4>CloudAEye</h4>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectList
