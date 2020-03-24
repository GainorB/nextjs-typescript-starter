/* eslint-disable import/no-commonjs */

require('dotenv').config();

const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants');

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER || process.env.NODE_ENV.includes('dev');
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  const env = {
    API_URL: (() => {
      if (isDev) return 'http://localhost:3000/dev/api';
      if (isProd) return 'http://localhost:3000/prod/api';
      if (isStaging) return 'http://localhost:3000/staging/api';
      return '';
    })(),
    // OTHER KEY:VALUE PAIRS
  };

  return {
    env,
    poweredByHeader: false,
  };
};
