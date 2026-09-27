import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
  width?: number;
  height?: number;
};

export default function MediaImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  unoptimized = false,
  width,
  height,
}: MediaImageProps) {
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes ?? `${width}px`}
        className={className}
        priority={priority}
        unoptimized={unoptimized}
      />
    );
  }

  return (
    <span className="relative block h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"}
        className={className}
        priority={priority}
        unoptimized={unoptimized}
      />
    </span>
  );
}
