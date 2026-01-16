import React, { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
    ref: HTMLDivElement;
    backgroundImage: string;
    height?: string;
    children?: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ref, backgroundImage, height = "100vh", children}) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], ["0%", "50%"]);

    return (
        <motion.div
            style={{
                height,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                rotateZ: y,
            }}
        >
            {children && (
                <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
            )}
        </motion.div>
    );
};

export default Parallax;
