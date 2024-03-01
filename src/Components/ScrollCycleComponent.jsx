import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Showcase from "./Showcase";
import cokolada from "/Cokolada.webp";
import rentasound from "/Rent a Sound.webp";
import trenirai from "/Trenirai.webp";
import flowmodoro from "/Flowmodoro.webp";
import ArrowIndicator from "./ArrowIndicator";
import toolstack from "/ToolStack.webp";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";

const showcasesData = [
  {
    name: "COKOLADA",
    imgSrc: cokolada,
    description:
      "Web portal made for a 48h hackaton challenge, backend written in Node.js, frontend done using React & TailwindCSS.",
    link: "https://github.com/nikoladragomirovic/cokolada",
    tech: [IoLogoJavascript, FaReact, FaNodeJs, SiTailwindcss],
  },
  {
    name: "RENT A SOUND",
    imgSrc: rentasound,
    description:
      "Web portal made for a small speaker rental business covering Novi Sad & Belgrade, you can view the catalogue with realtime information about taken speakers, and order.",
    link: "https://nikoladragomirovic.github.io/rent-a-sound/",
    tech: [
      IoLogoJavascript,
      FaReact,
      FaPython,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
  },
  {
    name: "TRENIRAI",
    imgSrc: trenirai,
    description:
      "Web frontend concept application for an AI workout plan assisant, made using vanilla javascript, html, css.",
    link: "https://github.com/nikoladragomirovic/trenir-ai",
    tech: [IoLogoJavascript, FaHtml5, FaCss3Alt],
  },
  {
    name: "FLOWMODORO",
    imgSrc: flowmodoro,
    description:
      "Electron pomodoro timer application that respects the flow state (adjusts rest based on time spent working).",
    link: "https://github.com/nikoladragomirovic/flowmodoro",
    tech: [IoLogoJavascript, IoLogoElectron, FaHtml5, FaCss3Alt],
  },
  {
    name: "TOOL STACK",
    imgSrc: toolstack,
    description:
      "Web developer toolbox app that supports stacking outputs and advanced drag and drop",
    link: "https://tool-stack.vercel.app",
    tech: [
      IoLogoJavascript,
      FaReact,
      IoLogoFirebase,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
  },
];

const placeholderImage = "";

const ScrollCycleComponent = () => {
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [keyIndex, setKeyIndex] = useState(1);

  const handleKeyDown = (event) => {
    if (event.code === "ArrowDown") {
      setCurrentShowcaseIndex(
        (prevIndex) => (prevIndex + 1) % showcasesData.length
      );
    } else if (event.code === "ArrowUp") {
      setCurrentShowcaseIndex(
        (prevIndex) =>
          (prevIndex - 1 + showcasesData.length) % showcasesData.length
      );
      currentShowcaseIndex;
    }

    setKeyIndex(currentShowcaseIndex);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentShowcaseIndex]);

  const currentShowcase = showcasesData[currentShowcaseIndex];

  return (
    <AnimatePresence mode="wait" className="w-full h-[84vh]">
      <motion.div
        className="w-full h-[82vh] flex items-center flex-col justify-start"
        key={keyIndex}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 100,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <Showcase
          name={currentShowcase.name}
          imgSrc={currentShowcase.imgSrc}
          description={currentShowcase.description}
          link={currentShowcase.link}
          icons={currentShowcase.tech}
        />
        <ArrowIndicator />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollCycleComponent;
