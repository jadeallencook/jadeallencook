"use client";

import { FC, useRef, useState } from "react";
import styles from "./style.module.css";
import { ImageField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import classNames from "classnames";

interface ImageWithLinkProps {
  link?: LinkField;
  image: ImageField;
  video?: string;
  videoAlt?: string;
  className?: string;
  isPriorityImage?: boolean;
}

const ImageWithLink: FC<ImageWithLinkProps> = ({
  image,
  video,
  videoAlt,
  link,
  className,
  isPriorityImage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      {!video && (
        <PrismicNextImage
          className={classNames(
            styles.image,
            !link && styles.bottomBorderRadius
          )}
          field={image}
          aria-hidden={!!image.alt}
          fallbackAlt=""
          priority={isPriorityImage}
        />
      )}
      {video && (
        <>
          <video
            ref={videoRef}
            className={classNames(
              styles.image,
              !link && styles.bottomBorderRadius
            )}
            poster={image.url || undefined}
            aria-label={videoAlt || image.alt || ""}
            autoPlay
            loop
            muted
            controls={false}
            playsInline
          >
            <source src={video} type="video/mp4" />
            <p>{videoAlt || image.alt}</p>
          </video>
          <button
            className={styles.playbackControl}
            onClick={toggleVideoPlayback}
            tabIndex={0}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            type="button"
          >
            {isPlaying ? "❚❚" : "►"}
          </button>
        </>
      )}
      {link?.text && (
        <div className={styles.linkContainer}>
          <PrismicNextLink field={link} tabIndex={0} />
        </div>
      )}
    </div>
  );
};

export default ImageWithLink;
