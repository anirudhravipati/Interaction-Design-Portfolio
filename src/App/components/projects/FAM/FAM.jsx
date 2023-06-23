import "./FAM.css";
import CustomCursor from "../../CustomCursor/CustomCursor";
import Sidemenu from "../../Sidemenu/Sidemenu";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";
import Info from "../ProjectComponents/Info/Info"

export default function FAM() {
  return (
    <>
      <Sidemenu showAbout={true} />
      <Info/>
      <Project />
      <Footer />
      <CustomCursor />
    </>
  );
}

function Project() {
  return(
    <motion.div style={{outline: "4px solid red"}}>
      <motion.h1 style={{textAlign: "center"}}>FAM</motion.h1>

    </motion.div>
  ) 
}