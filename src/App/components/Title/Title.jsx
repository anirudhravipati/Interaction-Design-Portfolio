import './Title.css'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react'


function Title () {
  return (
    <AnimatedTitle />
  )
}

export function AnimatedTitle() {
  const [showBlurb,setShowBlurb] = useState(false)
  
  function handleHover(val)
  {
    console.log(val)
    setShowBlurb(val);
  }
  return (
    <motion.div
    whileHover={{ border: "1px solid black" }}
    onHoverStart={() => handleHover(true)}
    onHoverEnd={() => handleHover(false)}
    id="Title"
    style={{
      border: "1px solid transparent",
      transition: "border-color 0.5s ease-in-out"}}
    >
      <AnimatePresence>      
        <motion.h1 key="title"> Aniruddh Ravipati</motion.h1>
        {
          showBlurb? (
            <motion.div
            key="blurb"
            id="title-hidden-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
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
            </motion.div>):(<></>)
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Title
