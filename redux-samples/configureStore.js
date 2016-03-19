/**
 * Created by pc on 2016/3/19.
 */
/**
 * Create Redux Store
 *
 * Store 就是把 Action 和 Reducer 联系到一起的对象。Store 有以下职责：
 • 维持应用的 state；
 • 提供 getState() 方法获取state；
 • 提供 dispatch(action) 方法更新 state；
 • 通过 subscribe(listener) 注册监听器。
 * 再次强调一下Redux 应用只有一个单一的store。当需要拆分处理数据的逻辑时，使用reducer 组合而不是创建多个store。
 */
import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk'
//import invariant from 'redux-immutable-state-invariant';
import todoApp from './reducers'


/**
 * Create store without enhancers and middlewares:
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState) {
  const store = createStore(
    todoApp,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

/**
 * Create store with enhancers and middlewares (thunk):
 * @param initialState
 * @returns {*}
 */
//export default function configureStore(initialState) {
//  const store = createStore(todoApp, initialState, compose(
//    applyMiddleware(invariant(), thunk),
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//  ));
//
//  if (module.hot) {
//    // Enable Webpack hot module replacement for reducers
//    module.hot.accept('./reducers', () => {
//      const nextReducer = require('./reducers');
//      store.replaceReducer(nextReducer);
//    });
//  }
//
//  return store;
//}


//let store = createStore(todoApp);



