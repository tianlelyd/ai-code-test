"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface MotionProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
}

export function FadeInUp({ children, delay = 0, className, ...props }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, delay = 0, className, ...props }: MotionProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
