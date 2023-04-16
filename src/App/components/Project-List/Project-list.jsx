import './Project-list.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProjectList() {

  return (
    <motion.div layout transition={{type: 'spring'}} id="Projects">
      <h2 id="project-card-title"> Projects</h2>
      <motion.div id="projects-list">
        <motion.div className="project-item">
          <h4>CloudAEye</h4>
        </motion.div>
        <motion.div className="project-item">
          <h4><Link to='FAM'>FAM</Link></h4>
        </motion.div>
        <motion.div className="project-item">
          <h4>CloudAEye</h4>
        </motion.div>
      </motion.div>
    </motion.div>
    
  )
}

export default ProjectList
