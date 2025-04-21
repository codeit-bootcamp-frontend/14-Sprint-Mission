import React from 'react';
import clsx from 'clsx';
import styles from './mainSelection.module.css';
import { motion } from 'framer-motion';

export function MainSelection({ className, boxName , children }) {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 1.1}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.6 , delay:0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={clsx(styles[className])}>
          <div className={styles.box_inner}>
            <div className={clsx( styles[boxName])}>
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
