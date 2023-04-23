import Image from "next/image";
import React from "react";

type Props = React.ComponentProps<typeof Image>;
const ImageComponent = ({ src, alt, fill, ...rest }: Props) => {
  return <Image alt={alt} src={src} quality={100} fill={fill} {...rest} />;
};

export default ImageComponent;
