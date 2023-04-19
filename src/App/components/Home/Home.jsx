import './Home.css'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence, LayoutGroup } from 'framer-motion'
import { useState } from 'react'
import ProjectList from '../Project-List/Project-list'
import CustomCursor from '../CustomCursor/CustomCursor'


export function Home() {

  const [hoverOnBlurb,setHoverOnBlurb] = useState(false); 

  return (  
    <>  
      <motion.div id='Home'>
        <LayoutGroup>
          <Title key="title" setHoverOnBlurb={setHoverOnBlurb}/>
          <ProjectList key="project-list" />
        </LayoutGroup>
      </motion.div>
      <CustomCursor cursorText={hoverOnBlurb?"more":undefined}/>
    </>
  )
}

function Title({setHoverOnBlurb}) {
  const [showBlurb,setShowBlurb] = useState(false)
  
  function handleHover(val)
  {
    setHoverOnBlurb(val);
    setShowBlurb(val);
  }
  return(
    <>
      <motion.div
      layout="position"
      transition={{type:'spring'}}
      style={{borderRadius:'16px'}}
      whileHover={{border:'1px solid black'}}
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
    </>
  
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
      <Link to='Documents/Resume Product Design.pdf' target="_blank" rel="noopener noreferrer">
        <motion.button id="resume" whileHover={{color:"white",backgroundColor:"black",transition:{type: "tween"}}}>
          Résumé
        </motion.button>
      </Link>
    </motion.div>
    )
}

export default Home
