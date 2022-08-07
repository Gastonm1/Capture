import React from "react";
//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUS = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{background: "#fff"}}
    >
      <h1>Contact</h1>
    </motion.div>
  );
};

export default ContactUS;
