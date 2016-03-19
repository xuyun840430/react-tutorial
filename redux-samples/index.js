/**
 * Created by pc on 2016/3/19.
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore';

const store = configureStore();

/**
 * 测试：发起 Actions
 *
 * 可以看到，在还没有开发界面的时候，我们就可以定义程序的行为。而且这时候已经可以写reducer 和action 创建函数的测试。不需要模拟任
 * 何东西，因为它们都是纯函数。只需调用一下，对返回值做断言，写测试就是这么简单。
 */
// 引用 action.js 中的 Action 创建函数和变量
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from './actions'

console.log(store.getState());

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState));

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();