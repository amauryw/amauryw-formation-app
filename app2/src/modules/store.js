// @flow

import { createStore } from 'redux';
import enhancer from 'app2/src/modules/rootEnhancer';
import reducers from 'app2/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
