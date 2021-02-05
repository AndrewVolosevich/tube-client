export interface GalleryImage {
  original: string;
  thumbnail?: string;
  description?: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: JSX.Element;
}

export interface MenuItem {
  title: string;
  path: string;
  image?: JSX.Element;
}
