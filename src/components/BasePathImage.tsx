import Image, { ImageProps } from "next/image";

type BasePathImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

function withBasePath(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src !== "string") {
    return src;
  }

  if (!src.startsWith("/")) {
    return src;
  }

  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

  if (!basePath || src === basePath || src.startsWith(`${basePath}/`)) {
    return src;
  }

  return `${basePath}${src}`;
}

export function BasePathImage({ src, alt, ...rest }: BasePathImageProps) {
  return <Image src={withBasePath(src)} alt={alt} {...rest} />;
}