import { useState } from "react";
import "./Sidemenu.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ProjectListData } from "../../Utilities/Data";
import { Link } from "react-router-dom";

export default function Sidemenu({ showAbout = false }) {
  const [hoverOverMenu, setHoverOverMenu] = useState(false);

  return (
    <motion.div
      layout
      id="sidemenu"
      onHoverStart={() => setHoverOverMenu(true)}
      onHoverEnd={() => setHoverOverMenu(false)}
      animate={{
        alignItems: "flex-start",
      }}
      transition={{
        layout: {
          duration: 0.1,
        },
      }}
    >
      <AnimatePresence>
        <motion.div layout id="hover-element" />
        {hoverOverMenu && (
          <motion.h6
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            key="home-link"
          >
            <Link to="/">Home</Link>
          </motion.h6>
        )}
        {hoverOverMenu &&
          ProjectListData.map((project) => (
            <motion.h6
              layout
              key={project.key}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link to="/FAM">{project.title}</Link>
            </motion.h6>
          ))}
        {hoverOverMenu && showAbout && (
          <motion.h6
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            key="about-link"
          >
            <Link to="/about">About</Link>
          </motion.h6>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
