import type { ImageProps } from '@chakra-ui/react';
import { chakra, Box, useBreakpointValue } from '@chakra-ui/react';
import type {
  ImageProps as NextImageProps,
  ImageLoaderProps as NextImageLoaderProps,
} from 'next/image';
import NextImage from 'next/image';

// Properties which are forwarded to the underlying next/image component
// NOTE: add in this list as you need to add properties to the underlying component
// example: if you want to adjust the border radius then just add borderRadius's property
const FORWARDED_PROPS = [
  'width',
  'height',
  'src',
  'alt',
  'quality',
  'placeholder',
  'blurDataURL',
  'loader',
] as const;

type ForwardedProps = typeof FORWARDED_PROPS[number];

// Width and height types which may contain Chakra's responsive array or object
type Width = NonNullable<ImageProps['width']>;
type Height = NonNullable<ImageProps['height']>;
// Width and height types containing only Chakra's responsive array or object
type OnlyResponsiveWidth = Exclude<Width, string | number>;
type OnlyResponsiveHeight = Exclude<Height, string | number>;

// Combine props by taking forwarded property types from next/image and rest
// from Chakra
type CombinedImageProps = Pick<NextImageProps, ForwardedProps> &
  Omit<ImageProps, ForwardedProps>;

// Replace width and height with Chakra's responsive width/height which is
// mandatory here due to next/image requirement
type ChakraNextImageProps = Omit<CombinedImageProps, 'width' | 'height'> & {
  width: Width;
  height: Height;
};

const ChakraNextImage = chakra(NextImage, {
  baseStyle: {},
  shouldForwardProp: (prop) =>
    (FORWARDED_PROPS as readonly string[]).includes(prop),
});

const myLoader = (resolverProps: NextImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}${
    resolverProps.quality ? `&q=${resolverProps.quality}` : ''
  }`;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <linearGradient id="g">
    <stop stop-color="#333" offset="20%" />
    <stop stop-color="#222" offset="50%" />
    <stop stop-color="#333" offset="70%" />
  </linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="#333" />
<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Image(props: ChakraNextImageProps): JSX.Element {
  const { width, height } = props;

  const responsiveWidth = useBreakpointValue(getResponsive(width));
  const responsiveHeight = useBreakpointValue(getResponsive(height));

  // Split properties to those for Box and for those which are forwarded
  const boxProps = { ...props };
  const imageProps = { ...props };
  for (const prop of Object.keys(props) as (keyof typeof props)[]) {
    if ((FORWARDED_PROPS as readonly string[]).includes(prop)) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete boxProps[prop];
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete imageProps[prop];
    }
  }

  return (
    <ChakraNextImage
      {...imageProps}
      {...boxProps}
      width={isResponsive(width) ? responsiveWidth ?? width : width}
      height={isResponsive(height) ? responsiveHeight ?? height : height}
      loader={myLoader}
      placeholder='blur'
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      transition='all 0.2s'
    />
  );
}

function isResponsive(
  val: Width | Height,
): val is OnlyResponsiveWidth | OnlyResponsiveHeight {
  return typeof val === 'object' && val !== null;
}

function getResponsive(val: Width | Height) {
  return isResponsive(val) ? val : [];
}
