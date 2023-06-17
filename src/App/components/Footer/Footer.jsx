import {
  LogoGithub,
  LogoLinkedin,
  Email,
  LogoInstagram,
  Phone,
} from "@carbon/icons-react";
import "./Footer.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div layout="position" className="footer">
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/anirudh-ravipati-13541bb5/"
          target="_blank"
        >
          <LogoLinkedin aria-label="LinkedIn" className="footer-icon" />
        </a>
        <a href="mailto: ravipatianirudh@gmail.com" target="_blank">
          <Email aria-label="e-mail" className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/ani.shunya/" target="_blank">
          <LogoInstagram aria-label="Instagram" className="footer-icon" />
        </a>
        <a href="https://github.com/anirudhravipati" target="_blank">
          <LogoGithub aria-label="Github" className="footer-icon" />
        </a>
        <a href="tel:+919985887990" target="_blank">
          <Phone aria-label="Phone" className="footer-icon" />
        </a>
      </div>
      <footer>Copyright 2023 Aniruddh Ravipati. All rights reserved.</footer>
    </motion.div>
  );
}
