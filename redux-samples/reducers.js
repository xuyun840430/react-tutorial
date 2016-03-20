/**
 * Created by Information on 2016/1/28.
 */

/**
 * Create Redux Reducer:
 * 在 Redux 应用中，所有的state 都被保存在一个单一对象中。以 todo 应用为例，需要保存两个不同的内容：
    • 当前选中的任务过滤条件；
    • 真实的任务列表。
 * 建议尽可能地把state范式化，不存在嵌套。把所有数据放到一个对象里，每个数据以ID 为主键，不同数据相互引用
 * 时通过ID 来查找。把应用的state 想像成数据库。
 */

import {combineReducers} from 'redux'
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions'
const {SHOW_ALL} = VisibilityFilters;


/**
 * visibilityFilter() reducer function
 * @param state
 * @param action
 * @returns {*}
 * reducer 就是一个函数，接收旧的state 和action，返回新的state。保持reducer 纯净非常重要。永远不要在reducer 里做这些操作：
     • 修改传入参数；
     • 执行有副作用的操作，如 API 请求和路由跳转；
     • 调用非纯函数，如 Date.now() 或 Math.random()。
 * 现在只需要谨记reducer 一定要保持纯净。只要传入参数一样，返回必须一样。没有特殊情况、没有副作用，没有API 请求、没有修改参数，
 * 单纯执行计算。
 *
 * 在拆分 Reducer 阶段，抽出一个reducer来专门管理visibilityFilter。
 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

/**
 * todos() reducer function
 * @param state
 * @param action
 * @returns {*}
 * 注意:
 1. 不要修改 state。使用Object.assign()新建了一个副本。不能这样使用Object.assign(state, {visibilityFilter: action.filter })，
    因为它会改变第一个参数的值。你必须把第一个参数设置为空对象{}。也可以使用ES7 中还在试验阶段的特性{ ...state, ...newState }，
    参考对象展开语法。
 2. 在 default 情况下返回旧的 state。遇到未知的action时，一定要返回旧的state。

 * 注意 todos 依旧接收state，但它变成了一个数组！现在todoApp只把需要更新的一部分state传给todos函数，todos函数自己确定如何更新
 * 这部分数据。这就是所谓的reducer合成，它是开发Redux应用最基础的模式。
 */
function todos(state = [], action) {
  switch (action.type) {

    /*
     不直接修改 state 中的字段，而是返回新对象。新的 todos 对象就相当于旧的 todos 在末尾加上新建的todo。而这个新的todo
     又是基于action 中的数据创建的。
     */
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false // Only add to state data
        }];

    /*
     因为我们不能直接修改却要更新数组中指定的一项数据，这里需要先把前面和后面都切开。时刻谨记永远不要在克隆state 前修改它。
     */
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true // Set completed flag
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}

/**
 * combineReducers function
 * 这里的todos 和 visibilityFilter 的更新看起来是相互独立的。有时state中的字段是相互依赖的，需要认真考虑，
 * 但在这个案例中我们可以把 todos 更新的业务逻辑和 visibilityFilter 业务拆分到不同的函数里。
 *
 * 注意每个reducer 只负责管理全局state中它负责的一部分。每个reducer的state参数都不同，分别对应它管理的那部分state数据。
 * 随着应用的膨胀，可以把 reducer 拆分成独立文件来分别处理不同的数据域了。最后，Redux 提供了combineReducers() 工具类来
 * 做上面 todoApp 做的事情，这样就能消灭一些样板代码了。
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;