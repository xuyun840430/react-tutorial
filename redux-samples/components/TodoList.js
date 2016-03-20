/**
 * Created by pc on 2016/3/20.
 */

/**
 * TodoList 用于显示 todos 列表。
   • todos: Array 以 { text, completed } 形式显示的todo项数组。
   • onTodoClick(index: number) 当todo项被点击时调用的回调函数。
 */

import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    )
  }
}
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
