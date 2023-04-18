import './Home.css'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence, LayoutGroup } from 'framer-motion'
import { useState } from 'react'
import ProjectList from '../Project-List/Project-list'

export function Home() {

  return (    
    <motion.div id='Home'
    >
      <LayoutGroup>
        <Title key="title"/>
        <ProjectList key="project-list" />
      </LayoutGroup>
    </motion.div>
  )
}

function Title() {
  const [showBlurb,setShowBlurb] = useState(false)
  
  function handleHover(val)
  {
    console.log(val)
    setShowBlurb(val);
  }
  return(
  <motion.div
    layout="position"
    transition={{type:'spring'}}
    whileHover={{border:'1px solid red'}}
    onHoverStart={() => handleHover(true)}
    onHoverEnd={() => handleHover(false)}
    id="Title"
    >
      <AnimatePresence>
        <motion.h1 style={{ textAlign: 'center' }} key="title-heading"> Aniruddh Ravipati</motion.h1>
        {
          showBlurb? <Blurb key="blurb"/>:(<></>)
        }
      </AnimatePresence>
    </motion.div>
  )
}

function Blurb() {
  return (
    <motion.div
    key="blurb"
    id="title-hidden-content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{type:'ease-in'}}
    >
      <motion.p id="personal-blurb">
      I am a product designer with a background in software development.
      Currently, I am currently designing products for CloudAEye, a SaaS startup that specialises in AIOps for Serverless Functions.
      With my multidisciplinary training in design, research and development, I aim to walk the fine line between aesthetic, utility and need.
      </motion.p>
      <motion.button id="resume">
        <Link to='Documents/Resume Product Design.pdf' target="_blank" rel="noopener noreferrer">
        Résumé
        </Link>
      </motion.button>
    </motion.div>
    )
}

export default Home
