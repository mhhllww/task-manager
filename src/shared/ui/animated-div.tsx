import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const layoutTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
};

export const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div {...layoutTransition} className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
