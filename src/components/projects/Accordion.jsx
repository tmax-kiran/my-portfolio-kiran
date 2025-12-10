import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -3 }} // slight lift
        transition={{ duration: 0.2 }}
        className="
        w-full 
        bg-[#0b1625]/70 
        backdrop-blur-xl 
        border border-gray-700/40 
        rounded-xl 
        p-4 mb-6 
        shadow-[0_0_15px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_25px_rgba(0,200,255,0.35)]
        transition-shadow duration-300
        whileHover={{ y: -3 }}

      "
      >
        <div className="w-full bg-gray-900/60 rounded-xl p-4 border border-gray-800 mb-6 shadow-lg">
          {/* HEADER */}
          <button
            className="w-full flex justify-between items-center text-white text-lg font-semibold"
            onClick={() => setOpen(!open)}
          >
            <span className="section-title">{title}</span>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiChevronDown size={22} className="text-gray-300" />
            </motion.div>
          </button>

          {/* CONTENT */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden mt-3"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Accordion;
