"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealCardProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function ScrollRevealCard({
    children,
    delay = 0,
    className = "",
}: ScrollRevealCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-80px",
    });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                rotateX: 8,
                scale: 0.95,
                y: 40,
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        y: 0,
                    }
                    : {
                        opacity: 0,
                        rotateX: 8,
                        scale: 0.95,
                        y: 40,
                    }
            }
            transition={{
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{
                perspective: "1000px",
                transformOrigin: "center bottom",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
