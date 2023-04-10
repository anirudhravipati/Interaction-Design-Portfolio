import './Title.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'


function Title () {
  let [titleHover,setTitleHover] = useState(0)
  console.log(titleHover)
  return (
    <motion.div
      whileHover={{ border: "1px solid black" }}
      onHoverStart={() => setTitleHover(1)}
      onHoverEnd={() => setTitleHover(0)}
      id="Title"
      style={{
        border: "1px solid transparent",
        transition: "border-color 0.5s ease-in-out"
      }}
  
    >
      <h1> Aniruddh Ravipati</h1>
      {
        titleHover? (
        <motion.div
          id="title-hidden-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:1}}
        >
          <p id="personal-blurb">
            I am a product designer with a background in software development.
            Currently, I am currently designing products for CloudAEye, a SaaS startup that specialises in AIOps for Serverless Functions.
            With my multidisciplinary training in design, research and development, I aim to walk the fine line between aesthetic, utility and need.
          </p>
          <button id="resume">
            <Link to='Documents/Resume Product Design.pdf' target="_blank" rel="noopener noreferrer">
            Résumé
            </Link>
          </button>
        </motion.div> ) : (<></>)
      }
    </motion.div>
  )
}


// function Title() {

//   return (
//     <div id="Title">
//       <h1> Aniruddh Ravipati</h1>
//       <div id="title-hidden-content">
//         <p id="personal-blurb">
//           I am a product designer with a background in software development.
//           Currently, I am currently designing products for CloudAEye, a SaaS startup that specialises in AIOps for Serverless Functions.
//           With my multidisciplinary training in design, research and development, I aim to walk the fine line between aesthetic, utility and need.
//         </p>
//         <button id="resume">
//           <Link to='Documents/Resume Product Design.pdf' target="_blank" rel="noopener noreferrer">
//           Résumé
//           </Link>
//         </button>
//       </div>
//     </div>
//   )
// }

export default Title
