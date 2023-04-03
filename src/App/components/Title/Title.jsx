import { useState } from 'react'
import './Title.css'

function Title() {

  return (
    <>
    <div className="Title">
      <h1> Aniruddh Ravipati</h1>
      <div className="title-hidden-content">
        <p id="personal-blurb">
          I am a product designer with a background in software development.
          Currently, I am currently designing products for CloudAEye, a SaaS startup that specialises in AIOps for Serverless Functions.
          With my multidisciplinary training in design, research and development, I aim to walk the fine line between aesthetic, utility and need.
        </p>
        <button id="resume">
          Résumé
        </button>
      </div>
    </div>
    </>
  )
}

export default Title
