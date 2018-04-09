// @flow

import { createStore } from 'redux';
import enhancer from 'Y/src/modules/rootEnhancer';
import reducers from 'Y/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
