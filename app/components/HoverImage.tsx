import { useState } from "react";
import Image from "next/image";


 export default function HoverImage({
     image_default,
     image_hover,
     name,
 } : {
     image_default : string
     image_hover : string
     name : string
 }) {

     const [hovering, setHovering] = useState(false);

     return (
         <>
            <Image
                 fill={true}
                 src={image_hover}
                 loading="eager"
                 alt={name}
                 className={"object-cover"}
                 quality={85}
             />
             <Image
                 fill={true}
                 src={image_default}
                 loading="eager"
                 alt={name}
                 className={`object-cover transition-opacity duration-275 ${hovering ? "opacity-0" : "opacity-100"}`}
                 quality={85}
                 onMouseEnter={() => setHovering(true)}
                 onMouseOut={() => setHovering(false)}
             />
             
             </>
         );
 }