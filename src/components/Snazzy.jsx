import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "" }: Props) => {
    
    return (
        <div style={{ width, overflow: "hidden"}}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
            >
            {children}
            </motion.div>
        </div>
    )
}
