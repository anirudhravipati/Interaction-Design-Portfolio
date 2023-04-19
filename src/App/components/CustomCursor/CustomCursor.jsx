import "./CustomCursor.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor({interactionVariant=undefined,cursorText=undefined}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
  };

  if(cursorText==undefined)
  {
    console.log("none!")
  }
  else console.log("cursorText: "+cursorText)


  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
    id="cursor"
    animate="default"
    transition={{duration:0.1}}
    variants={variants}>{(cursorText==undefined?"":cursorText)}</motion.div>
  );
}

export default CustomCursor;
