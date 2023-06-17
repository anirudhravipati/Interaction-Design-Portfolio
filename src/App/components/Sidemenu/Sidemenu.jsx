import { useState } from "react";
import "./Sidemenu.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ProjectListData } from "../../Utilities/Data";

export default function Sidemenu() {
  const [hoverOverMenu, setHoverOverMenu] = useState(false);

  return (
    <motion.div
      id="sidemenu"
      onHoverStart={() => setHoverOverMenu(true)}
      onHoverEnd={() => setHoverOverMenu(false)}
      animate={{
        alignItems: "flex-start",
      }}
      transition={{
        duration: 1,
        layout: {
          duration: 1,
        },
      }}
    >
      <AnimatePresence>
        <motion.div layout id="hover-element" />
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
              {" "}
              project.title
            </motion.h6>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}
