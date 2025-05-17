"use client";

import Image, { ImageProps } from "next/image";
import { allowedImageDomains, defaultImg, imageExtensionRegex } from "@/lib/imageAssets";
import { useState } from "react";

interface ImageWithFadeProps extends ImageProps {
  fallbackSrc?: string;
  blurDataURL?: string;
}

export const FallbackImage = ({
  src,
  alt,
  fallbackSrc = defaultImg,
  blurDataURL = defaultImg,
  className = "",
  ...props
}: ImageWithFadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // console.log("src", src);
  // string 타입 보장
  const url = typeof src === "string" ? src : "";

  // 유효성 검사
  let isValid = false;
  try {
    const parsed = new URL(url);
    const isExtensionOk = imageExtensionRegex.test(parsed.pathname);
    const isDomainOk = allowedImageDomains.includes(parsed.hostname);
    isValid = isExtensionOk && isDomainOk;
  } catch {
    isValid = false;
  }

  // 최종 표시할 이미지 src
  const finalSrc = hasError || !isValid ? defaultImg : src;

  return (
    <div className="relative w-full aspect-[1/1]">
      <Image
        src={defaultImg}
        alt={alt}
        fill
        priority
        sizes="sm:100vw, 33vw"
        className={`absolute inset-0 object-cover scale-105 transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <Image
        src={finalSrc}
        alt={alt}
        fill
        priority
        unoptimized
        onLoad={() => setIsLoaded(true)}
        sizes="sm:100vw, 33vw"
        className={`object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

