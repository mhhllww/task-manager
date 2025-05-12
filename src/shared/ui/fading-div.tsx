import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

const layoutTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const FadingDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div {...layoutTransition}>{children}</motion.div>
    </AnimatePresence>
  );
};
