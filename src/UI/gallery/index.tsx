import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import { GalleryImage } from "~/interfaces/utility-types";
// import {useRouter} from "next/router";

const Gallery = (props: {
  items: GalleryImage[];
  showThumbnails?: boolean;
  showFullscreenButton?: boolean;
  showPlayButton?: boolean;
  autoPlay?: boolean;
  slideDuration?: number;
  additionalClass?: string;
}) => {
  const galleryRef = useRef(null);
  // const router = useRouter()

  return (
    <ImageGallery
      ref={galleryRef}
      items={props.items}
      showThumbnails={props.showThumbnails}
      showFullscreenButton={props.showFullscreenButton}
      showPlayButton={props.showPlayButton}
      autoPlay={props.autoPlay}
      slideDuration={props.slideDuration}
      additionalClass={props.additionalClass}
      onClick={() => {
        // if(galleryRef && typeof galleryRef.current !== "undefined" && galleryRef.current !== null) {
        //   const index = galleryRef.current.getCurrentIndex()
        //   router.push(props.items[index].path ? props.items[index].path : "/")
        // }
      }}
    />
  );
};

export default Gallery;
