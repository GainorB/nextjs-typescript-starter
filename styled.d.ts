import 'styled-components';
import {colors} from './src/theme/colors';
import {media} from './src/theme/media-queries';
import {typography} from './src/theme/typography';
import {utils} from './src/theme/utils';
import {resets} from './src/theme/resets';
import {zIndex} from './src/theme/zIndex';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: typeof typography;
    zIndex: typeof zIndex;
    colors: typeof colors;
    utils: typeof utils;
    resets: typeof resets;
    media: typeof media;
  }
}
