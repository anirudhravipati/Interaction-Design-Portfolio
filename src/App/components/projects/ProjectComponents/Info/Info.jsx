import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  SiMui,
  SiFigma,
  SiConfluence,
  SiReact,
} from "@icons-pack/react-simple-icons";
import "./Info.css";
import { useState } from "react";
import { Opacity } from "@carbon/icons-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { InformationFilled } from "@carbon/icons-react";

const Icons = [
  {
    application: "Figma",
    DOM: <SiFigma className="info-panel-application-logo" size="1rem" />,
  },
  {
    application: "Confluence",
    DOM: <SiConfluence className="info-panel-application-logo" size="1rem" />,
  },
  {
    application: "React",
    DOM: <SiReact className="info-panel-application-logo" size="1rem" />,
  },
  {
    application: "MUI",
    DOM: <SiMui className="info-panel-application-logo" size="1rem" />,
  },
];

export default function Info() {
  return (
    <>
      <HoverCard.Root openDelay={1}>
        <HoverCard.Trigger className="HoverTrigger">
          <InformationFilled size={"2rem"} />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.HoverCardContent
            collisionPadding={"0.25rem"}
            className="HoverContent"
            sideOffset={5}
          >
            <InfoEntry purpose="designed in" application={["Figma"]} />
            <InfoEntry
              purpose="frontend stack"
              application={["React", "MUI"]}
            />
            <InfoEntry
              purpose="documentation & management"
              application={["Confluence"]}
            />
            <InfoEntry
              purpose="over the period"
              application={["23 Jan '23 - 24 Jan"]}
            />
          </HoverCard.HoverCardContent>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}

function InfoEntry({ purpose = "", application }) {
  return (
    <motion.div
      layout
      className="info-entry"
      initial={{ y: -2, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p style={{ fontStyle: "italic", fontSize: "0.75rem" }}>
        {purpose}
      </motion.p>
      {application.map((app) => {
        return (
          <motion.div key={app} className="application-row">
            {Icons.find((item) => item.application == app) &&
              Icons.find((item) => item.application == app).DOM}
            <p>{app}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
