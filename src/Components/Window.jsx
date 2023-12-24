import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Window = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState();
  const [animateLeftArrow, setAnimateLeftArrow] = useState(false);
  const [animateRightArrow, setAnimateRightArrow] = useState(false);

  const pageWheel = {
    "left/": "/contact",
    "left/projects": "/",
    "left/contact": "/projects",
    "right/": "/projects",
    "right/projects": "/contact",
    "right/contact": "/",
  };

  return (
    <div className="w-full h-screen flex flex-row justify-between items-center px-2 py-10 bg-indigo-100">
      <BiSolidLeftArrow
        className={`text-6xl text-indigo-400 bg-gradient-to-r from-indigo-100 to-indigo-300 mr-4 rounded-r-md p-2 hover:text-7xl hover:mr-6 duration-300 ${
          animateLeftArrow ? "animate-jump" : ""
        }`}
        onClick={() => {
          setDirection(0);
          setAnimateLeftArrow(false);
          setTimeout(() => {
            setAnimateLeftArrow(true);
          });
          setTimeout(() => {
            navigate(pageWheel["left" + location.pathname]);
          }, 0);
        }}
      />
      <div className="w-full h-full overflow-hidden rounded-lg relative flex items-center justify-center p-8 pt-16 outline outline-2 outline-indigo-200">
        <div className="bg-[url('https://cdn.dribbble.com/users/5520917/screenshots/15604939/media/777c7c72d99b1335909d6f7d6e2a974c.gif')] blur-3xl scale-125 opacity-75 w-full h-full bg-cover absolute"></div>
        <div className="w-full h-full bg-indigo-50 rounded-lg relative shadow-[0_0_30px] shadow-indigo-600 outline outline-2 outline-indigo-200 overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <AnimatePresence mode="wait" className="w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    key="hero"
                    initial={{
                      opacity: 0,
                      x: direction === 0 ? "100%" : "-100%",
                    }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="w-full h-full flex items-center justify-center text-black">
                      HOME
                    </p>
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatePresence mode="wait" className="w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    key="projects"
                    initial={{
                      opacity: 0,
                      x: direction === 0 ? "100%" : "-100%",
                    }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="w-full h-full flex items-center justify-center text-black">
                      PROJECTS
                    </p>
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatePresence mode="wait" className="w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    key="contact"
                    initial={{
                      opacity: 0,
                      x: direction === 0 ? "100%" : "-100%",
                    }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="w-full h-full flex items-center justify-center text-black">
                      CONTACT
                    </p>
                  </motion.div>
                </AnimatePresence>
              }
            />
          </Routes>
        </div>
      </div>
      <BiSolidRightArrow
        className={`text-6xl text-indigo-400 bg-gradient-to-l from-indigo-100 to-indigo-300 ml-4 rounded-l-md p-2 hover:text-7xl hover:scale-x-125 hover:ml-6 duration-300 ${
          animateRightArrow ? "animate-jump" : ""
        }`}
        onClick={() => {
          setDirection(1);
          setAnimateRightArrow(false);
          setTimeout(() => {
            setAnimateRightArrow(true);
          });
          setTimeout(() => {
            navigate(pageWheel["right" + location.pathname]);
          }, 0);
        }}
      />
    </div>
  );
};

export default Window;