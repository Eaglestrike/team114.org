"use client"
import React from "react";

import { RefObject, useEffect, useRef, useState} from "react"
import {frame, useSpring, motion, interpolate} from "framer-motion";

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                setX(clientX - element.offsetLeft - element.offsetWidth / 2)
                setY(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x,y }
}

export default function Cardmove({
                   title,
                   text,
               }: {
    title: string;
    text: string;
}){
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)
    return (
        <motion.div
            style={{
                width: "300px",
                height: "400px",
                backgroundColor: "#3498db",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                margin: "50px auto",
                transformOrigin: "center",
                rotateY: 0,
                rotateX: 45,
            }}
        >
            <text className={"bold"}>{title}</text>
            <text className={"font-3xl"}>{text}</text>
        </motion.div>
    );
};
