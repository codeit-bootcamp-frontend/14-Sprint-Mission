import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-center mt-[30px]"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          className="w-[30px] h-[30px] border-[#F3F4F6] border-[3px] rounded-full border-t-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Loading;
