import {DefaultTheme} from 'styled-components';
import {colors} from './colors';
import {media} from './media-queries';
import {typography} from './typography';
import {utils} from './utils';
import {resets} from './resets';
import {zIndex} from './zIndex';

export const theme: DefaultTheme = {
  typography,
  zIndex,
  colors,
  utils,
  media,
  resets,
};
