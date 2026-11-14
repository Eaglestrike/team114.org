import Image from "next/image";

// Swaps to the hover image when any ancestor with the `group` class is hovered.
// Pass an empty string for both images to show a plain blue placeholder.
export default function HoverImage({
    image_default,
    image_hover,
    name,
    zoom = 1,
    y = 50,
    zoomHover,
    yHover,
}: {
    image_default: string
    image_hover: string
    name: string
    // Optional framing: zoom > 1 zooms in; y is the vertical focus in % (0 = top, 100 = bottom)
    zoom?: number
    y?: number
    // Optional separate framing for the hover photo (defaults to zoom / y)
    zoomHover?: number
    yHover?: number
}) {
    const frame = (z: number, py: number) => ({ objectPosition: `50% ${py}%`, transform: `scale(${z})`, transformOrigin: `50% ${py}%` });
    const framing = frame(zoom, y);
    const hoverFraming = frame(zoomHover ?? zoom, yHover ?? y);
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
                style={hoverFraming}
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
