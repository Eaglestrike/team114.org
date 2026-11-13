import Image from "next/image";

// Swaps to the hover image when any ancestor with the `group` class is hovered.
// Pass an empty string for both images to show a plain blue placeholder.
export default function HoverImage({
    image_default,
    image_hover,
    name,
}: {
    image_default: string
    image_hover: string
    name: string
}) {
    if (!image_default) {
        return <div className="absolute inset-0 bg-slate-900" aria-label={name} />;
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
            />
            <Image
                fill={true}
                src={image_default}
                loading="eager"
                alt={name}
                className={"object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"}
                quality={85}
            />
        </>
    );
}
