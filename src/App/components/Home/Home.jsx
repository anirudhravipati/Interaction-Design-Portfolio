import "./Home.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import ProjectList from "../Project-List/Project-list";
import CustomCursor from "../CustomCursor/CustomCursor";
import Footer from "../Footer/Footer";
import Sidemenu from "../Sidemenu/Sidemenu";

export function Home() {
  const [hoverOnBlurb, setHoverOnBlurb] = useState(false);
  const [hoverOnButton, setHoverOnButton] = useState(false);

  return (
    <>
      <LayoutGroup>
        <motion.div id="Home">
          <LayoutGroup>
            <Title
              key="title"
              setHoverOnBlurb={setHoverOnBlurb}
              setHoverOnButton={setHoverOnButton}
            />
            <ProjectList
              key="project-list"
              setHoverOnBlurb={setHoverOnBlurb}
              setHoverOnButton={setHoverOnButton}
            />
          </LayoutGroup>
        </motion.div>
        <Footer />
      </LayoutGroup>
      <Sidemenu showAbout={true}/>
      <CustomCursor
        interaction={hoverOnButton ? "button" : ""}
        cursorText={hoverOnBlurb ? "more" : undefined}
      />
    </>
  );
}

function Title({ setHoverOnBlurb, setHoverOnButton }) {
  const [showBlurb, setShowBlurb] = useState(false);

  function handleHover(val) {
    setShowBlurb(val);
  }

  return (
    <>
      <motion.div
        layout="position"
        transition={{ type: "spring" }}
        style={{ borderRadius: "16px" }}
        whileHover={{ border: "1px solid black" }}
        onHoverStart={() => handleHover(true)}
        onHoverEnd={() => handleHover(false)}
        id="Title"
      >
        <AnimatePresence>
          <motion.h1 style={{ textAlign: "center" }} key="title-heading">
            {" "}
            Aniruddh Ravipati
          </motion.h1>
          {showBlurb ? (
            <Blurb
              key="blurb"
              setHoverOnBlurb={setHoverOnBlurb}
              setHoverOnButton={setHoverOnButton}
            />
          ) : (
            <></>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function Blurb({ setHoverOnBlurb, setHoverOnButton }) {
  function handleHover(func, val) {
    func(val);
  }

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      key="blurb"
      id="title-hidden-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "ease-in" }}
    >
      <Link to="about">
        <p
          id="personal-blurb"
          onMouseEnter={() => handleHover(setHoverOnBlurb, true)}
          onMouseLeave={() => handleHover(setHoverOnBlurb, false)}
        >
          I am a product designer with a background in software development.
          Currently, I am currently designing products for CloudAEye, a SaaS
          startup that specialises in AIOps for Serverless Functions. With my
          multidisciplinary training in design, research and development, I aim
          to walk the fine line between aesthetic, utility and need.
        </p>
      </Link>
      <Link
        to="Documents/Resume Product Design.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
      >
        <motion.button
          id="resume"
          whileHover={{
            color: "white",
            backgroundColor: "black",
            transition: { type: "tween" },
          }}
          onHoverStart={() => handleHover(setHoverOnButton, true)}
          onHoverEnd={() => handleHover(setHoverOnButton, false)}
        >
          Résumé
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
