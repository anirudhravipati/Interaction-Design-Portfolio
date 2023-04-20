import "./CustomCursor.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor({interaction="",cursorText=undefined}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    button : {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale:0,
    }
  };

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
    animate={(interaction=="")?"default":interaction}
    transition={{duration:0.1}}
    variants={variants}>{(cursorText==undefined?(<></>):cursorText)}</motion.div>
  );
}

export default CustomCursor;
