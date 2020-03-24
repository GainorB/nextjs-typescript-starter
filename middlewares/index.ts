import thunk from 'redux-thunk';
import {batch} from 'redux-batch-middleware';

const middlewares: any[] = [thunk, batch];

const devMiddlewares: any[] = [...middlewares];

export default {
  prod: middlewares,
  dev: devMiddlewares,
};
