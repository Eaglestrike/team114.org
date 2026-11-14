import Image from "next/image";

// Swaps to the hover image when any ancestor with the `group` class is hovered.
// Pass an empty string for both images to show a plain blue placeholder.
export default function HoverImage({
    image_default,
    image_hover,
    name,
    zoom = 1,
    y = 50,
}: {
    image_default: string
    image_hover: string
    name: string
    // Optional framing: zoom > 1 zooms in; y is the vertical focus in % (0 = top, 100 = bottom)
    zoom?: number
    y?: number
}) {
    const framing = { objectPosition: `50% ${y}%`, transform: `scale(${zoom})`, transformOrigin: `50% ${y}%` };
    if (!image_default) {
        return <div className="absolute inset-0 bg-[#0c1222]" aria-label={name} />;
    }

    return (
        <>
            <Image
                fill={true}
                src={image_hover || image_default}
                loading="eager"
                alt={name}
                className={"object-cover"}
                quality={85}
                style={framing}
            />
            <Image
                fill={true}
                src={image_default}
                loading="eager"
                alt={name}
                className={"object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"}
                quality={85}
                style={framing}
            />
        </>
    );
}
