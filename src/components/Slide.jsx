import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

 


export const Slide = (props) => {
    

    

    const slidersVariants = {
    hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
    },
    };



        

        

    return (
       <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={props.handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={props.handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        
      </div>
    )
}