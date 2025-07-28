import Image, { ImageProps } from 'next/image';

const prefix = process.env.NODE_ENV === 'production' ? '/studio' : '';

export default function AppImage(props: ImageProps) {
  const src = typeof props.src === 'string' ? prefix + props.src : props.src;
  return <Image {...props} src={src} />;
}
