/**
 * Created by Information on 2016/1/28.
 */


/**
 * Create Redux Action
 */
/*
 Action 类型
 */
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 其他常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 Action 创建函数
 */

// Redux 中的action 创建函数是纯函数，它没有任何副作用，只是返回action 对象而已
export function addTodo(text) {
  return {type: ADD_TODO, text};
}

export function completeTodo(index) {
  return {type: COMPLETE_TODO, index};
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}