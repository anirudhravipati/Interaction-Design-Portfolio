import "./Project-list.css";
import { AnimatePresence, motion } from "framer-motion";
import { offset, flip, useFloating, autoUpdate } from "@floating-ui/react";
import { Suspense, useEffect, useState } from "react";
import { ProjectListData } from "../../Utilities/Data";
import ImageLoader from "../../Utilities/ImageLoader";
import CustomCursor from "../CustomCursor/CustomCursor";


function ProjectList() {

  return (
    <motion.div layout transition={{ type: "spring" }} id="Projects">
      <h2> Projects</h2>
      <motion.div id="projects-list">
        {
          ProjectListData.map((project) => <ProjectItem key={project.key} item={project} />)
        }
      </motion.div>
    </motion.div>
  );
}

function ProjectItem({ item }) {
  const [anchor, setAnchor] = useState(null);
  const [hoverState, setHover] = useState(false);

  return (
    <motion.div ref={setAnchor} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="project-item">
      <h4>{item.title}</h4>
      <Tooltip key={item.tooltip_key} item={item} hover={hoverState} anchor={anchor} />
    </motion.div>
  )
}

function Tooltip({ item, hover = false, anchor }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating(
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: "right",
      whileElementsMounted: autoUpdate,
      middleware: [offset(-4), flip()],
      elements: {
        reference: anchor,
      }
    }
  );

  useEffect(() => setIsOpen(hover)
    , [hover]
  )

  console.log(`isOpen :` + isOpen)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          
          ref={refs.setFloating} 
          style={floatingStyles}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity: 0}}
          transition={{duration: 0.4}}
        >
          <div className="project-list-tooltip">
            <h6>{item.title}</h6>
            <ImageLoader src={item.src} className={"preview-image"}/>
            <p>{item.content}</p>
            <div className="tags">
              {item.tags.map(tag => <footer key={item.title+tag} className="tag">{tag}</footer>)}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectList;
