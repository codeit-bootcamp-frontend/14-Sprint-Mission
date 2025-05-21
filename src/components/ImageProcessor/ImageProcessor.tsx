"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import EmptyIcon from "@/assets/icons/default_profile.svg";
import styles from "./ImageProcessor.module.css";

interface ImageProcessorProps extends ImageProps {}

const ImageProcessor = ({
  width,
  height,
  alt,
  src,
  ...props
}: ImageProcessorProps) => {
  const [imageStatus, setImageStatus] = useState<
    "loading" | "error" | "loaded"
  >();

  const handleLoadImage = () => {
    setImageStatus("loaded");
  };

  const handleLoadErrorImage = () => {
    setImageStatus("error");
  };

  return (
    <div className={styles.image_wrapper}>
      {imageStatus === "loading" && (
        <span className={styles.loading_text}>로딩 중</span>
      )}
      {(imageStatus === undefined || imageStatus === "error") && <EmptyIcon />}
      {src && imageStatus !== "error" && (
        <Image
          width={width}
          height={height}
          className={styles.item_image}
          src={src}
          alt={alt}
          onLoad={handleLoadImage}
          onError={handleLoadErrorImage}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageProcessor;
