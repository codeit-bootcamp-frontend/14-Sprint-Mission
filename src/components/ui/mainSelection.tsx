import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import clsx from 'clsx';

interface MotionSelectionProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function VisualSelection({ className, children }: MotionSelectionProps) {

  return (
    <div className={clsx("h-[540px] bg-[#CFE5FF] tablet:h-[744px] mobile:h-[540px]",className)}>
      <Container className="relative h-full">{children}</Container>
    </div>
  )
}
export function MotionSelection({ className, children }: MotionSelectionProps) {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 1.1}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.6 , delay:0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Container className="relative">
          <div className={clsx("flex items-center gap-[64px] max-w-[988px] my-[138px] mx-auto bg-secondary-10 tablet:flex-col tablet:gap-[24px] tablet:my-[24px]", className)}>
            {children}
          </div>
        </Container>
      </motion.div>
    </>
  );
}
