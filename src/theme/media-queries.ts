enum SIZES {
  tablet = 768,
  desktop = 1024,
  largeDesktop = 1280,
  giantDesktop = 1600,
}

const customMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(SIZES.tablet),
  desktop: customMediaQuery(SIZES.desktop),
  largeDesktop: customMediaQuery(SIZES.largeDesktop),
  giantDesktop: customMediaQuery(SIZES.giantDesktop),
};
