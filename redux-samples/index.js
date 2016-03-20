/**
 * Created by pc on 2016/3/19.
 */


/**
 * index.js: 形成所有依赖关系和调用模块，应用程序使用 webpeck 打包的入口
 *
 * Redux的数据流：
 * 严格的单向数据流是Redux 架构的设计核心。这意味着应用中所有的数据都遵循相同的生命周期。Redux 应用中数据的生命周期遵循下面4 个步骤：
 *  1. 调用 store.dispatch(action)： Action 就是一个描述“发生了什么”的普通对象，可以把action 理解成新闻的摘要。可以在任何地方
 *     调用store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中。
 *  2. Redux store 调用传入的 reducer 函数：Store 会把两个参数传入 reducer： 当前的 state 树 (用于重新组装/添加并返回的状态) 和
 *     action (自定义数据的类型和值)。注意 reducer 是纯函数。它仅仅用于计算下一个 state。它应该是完全可预测的：多次传入相同的输入
 *     必须产生相同的输出。它不应做有副作用的操作，如API调用或路由跳转。这些应该在 dispatch action 前发生。
 *  3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。根 reducer 的结构完全由你决定。Redux 原生提供
 *     combineReducers() 辅助函数，来把根 reducer 拆分成多个函数，用于分别处理 state 树的一个分支。当你触发action 后，
 *     combineReducers 返回的 todoApp 会负责调用两个 reducer: visibilityFilter 和 todos，然后会把两个结果集合并成一个 state 树，
 *     而这个 state 树的值属性名即为 visibilityFilter 和 todos (依赖于在哪个函数中 return 来分类)。
 *  4. Redux store 保存了根 reducer 返回的完整 state 树。这个新的树就是应用的下一个 state。所有订阅 store.subscribe(listener)
 *     的监听器都将被调用；监听器里可以调用store.getState() 获得当前state。现在，可以应用新的state来更新UI。如果你使用React-Redux
 *     这类的绑定库，这时就应该调用 component.setState(newState) 来更新。
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' // link module between react and redux
import AppContainer  from './components/AppContainer' // react view module
import configureStore from './configureStore';

let store = configureStore();
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react-redux')
);


/**
 * React 连接到 Redux
 *
 * 在连接的过程中需要做出两个变化，将 AppContainer 组件连接到 Redux 并且让它能够 dispatch actions 以及从Redux store 读取到state。
 * 首先，需要获取从之前安装好的 react-redux 提供的 Provider，并且在渲染之前将根组件包装进<Provider>。
 */


/**
 * 测试：发起 Actions
 *
 * 可以看到，在还没有开发界面的时候，我们就可以定义程序的行为。而且这时候已经可以写reducer 和action 创建函数的测试。不需要模拟任
 * 何东西，因为它们都是纯函数。只需调用一下，对返回值做断言，写测试就是这么简单。
 */
//// 引用 action.js 中的 Action 创建函数和变量
//import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from './actions'
//
//console.log(store.getState());
//
//// 监听 state 更新时，打印日志
//// 注意 subscribe() 返回一个函数用来注销监听器
//let unsubscribe = store.subscribe(() => console.log(store.getState));
//
//// 发起一系列 action
//store.dispatch(addTodo('Learn about actions'));
//store.dispatch(addTodo('Learn about reducers'));
//store.dispatch(addTodo('Learn about store'));
//store.dispatch(completeTodo(0));
//store.dispatch(completeTodo(1));
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
//// 停止监听 state 更新
//unsubscribe();