// src/components/ImageWrapper.tsx
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallbackSrc?: string;
};

const ImageWrapper = ({
  fallbackSrc = "/no-img-available.jpg",
  src,
  ...rest
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={rest.alt || "Image"}
      onError={() => setImgSrc(fallbackSrc)}
      fill
      className={`object-contain rounded ${rest.className || ""}`}
    
    />
  );
};

export default ImageWrapper;
