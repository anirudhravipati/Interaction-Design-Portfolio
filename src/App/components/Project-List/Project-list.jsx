import "./Project-list.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { autoPlacement,useFloating,autoUpdate } from "@floating-ui/react";
import { useEffect, useState } from "react";


function ProjectList() {
  return (
    <motion.div layout transition={{ type: "spring" }} id="Projects">
      <h2> Projects</h2>
      <motion.div id="projects-list">
        <ProjectItem title="CloudAEye"/>
        <ProjectItem title="FAM"/>
        <ProjectItem title="CloudAEye"/>
      </motion.div>
    </motion.div>
  );
}

function ProjectItem({title="Title"})
{
  const [anchor,setAnchor] = useState(null);
  const [hoverState,setHover] = useState(false);

  return (
    <motion.div ref={setAnchor} onHoverStart={()=>setHover(true)} onHoverEnd={()=>setHover(false)} className="project-item">
      <h4>{title}</h4>
      <Tooltip hover={hoverState} anchor={anchor}/>
    </motion.div>
  )
}

function Tooltip({hover=false,anchor})
{
  const [isOpen, setIsOpen] = useState(false);

  const {refs, floatingStyles} = useFloating(
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: "right",
      elements: {
        reference: anchor,
      }
    }
  );

  useEffect( ()=> setIsOpen(hover)
    , [hover]
  )

  console.log(`isOpen :`+isOpen)
  return(
    <>
    {isOpen && (
      <div ref={refs.setFloating} style={floatingStyles}>
        <div  className="project-list-tooltip">
            ToolTip goes here!
        </div>
      </div>
    )}
    </>
  )


}

export default ProjectList;
