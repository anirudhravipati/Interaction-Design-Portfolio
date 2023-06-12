import "./Project-list.css";
import { motion } from "framer-motion";
import { offset, flip, useFloating, autoUpdate } from "@floating-ui/react";
import { useEffect, useState } from "react";
import { ProjectListData } from "../../Utilities/Data";

function ProjectList() {

  return (
    <motion.div layout transition={{ type: "spring" }} id="Projects">
      <h2> Projects</h2>
      <motion.div id="projects-list">
        {
          ProjectListData.map((project) => <ProjectItem item={project} />)
        }
      </motion.div>
    </motion.div>
  );
}

function ProjectItem({ item }) {
  const [anchor, setAnchor] = useState(null);
  const [hoverState, setHover] = useState(false);

  return (
    <motion.div key={item.key} ref={setAnchor} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="project-item">
      <h4>{item.title}</h4>
      <Tooltip item={item} hover={hoverState} anchor={anchor} />
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
    <>
      {isOpen && (
        <div key={item.tooltip_key} ref={refs.setFloating} style={floatingStyles}>
          <div className="project-list-tooltip">
            <h6>{item.title}</h6>
            <img rel="preload" src={item.src} className="preview-image" />
            <p>{item.content}</p>
            <div className="tags">
              {item.tags.map(tag => <div className="tag">tag</div>)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectList;
