import React from "react";
import { IKImage } from "imagekitio-react";

function Image({ src, className, w, h, alt, style }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      width={w}
      height={h}
      alt={alt}
      lqip={{ active: true, quality: 20 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      style={style}
    />
  );
}

export default Image;
