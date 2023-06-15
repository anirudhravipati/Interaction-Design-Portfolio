import "./Project-list.css";
import { AnimatePresence, motion } from "framer-motion";
import { offset, flip, useFloating, autoUpdate } from "@floating-ui/react";
import { Suspense, useEffect, useState } from "react";
import { ProjectListData } from "../../Utilities/Data";
import ImageLoader from "../../Utilities/ImageLoader";
import CustomCursor from "../CustomCursor/CustomCursor";
import { Link } from "react-router-dom";


function ProjectList({setHoverOnBlurb,setHoverOnButton}) {

  return (
    <motion.div layout transition={{ type: "spring" }} id="Projects">
      <h2> Projects</h2>
      <motion.div id="projects-list">
        {
          ProjectListData.map((project) => <ProjectItem key={project.key} item={project} setHoverOnBlurb={setHoverOnBlurb} setHoverOnButton={setHoverOnButton} />)
        }
      </motion.div>
    </motion.div>
  );
}

function ProjectItem({ item,setHoverOnBlurb,setHoverOnButton }) {
  const [anchor, setAnchor] = useState(null);
  const [hoverState, setHover] = useState(false);

  return (
    <motion.div ref={setAnchor} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="project-item">
      <h4>{item.title}</h4>
      <Tooltip key={item.tooltip_key} item={item} hover={hoverState} anchor={anchor} setHoverOnBlurb={setHoverOnBlurb} setHoverOnButton={setHoverOnButton} />
    </motion.div>
  )
}

function Tooltip({ item, hover = false, anchor,setHoverOnBlurb,setHoverOnButton }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleHover(func,val)
  {
    func(val);
  }

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
            <motion.p 
              onHoverStart={()=>handleHover(setHoverOnBlurb,true)}
              onHoverEnd={()=>handleHover(setHoverOnBlurb,false)}
            >
              <Link to='FAM'>
                {item.content}
              </Link>
            </motion.p>
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
