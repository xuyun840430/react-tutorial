/**
 * Created by pc on 2016/3/20.
 */

/**
 * AppContainer (Container Components / Smart Component):
 * 该组件为 Dumb / Presentational Components（最顶层组件），负责管理和组装，并将数据通过 props 传入这些 Components。Redux 的
 * React 绑定库包含了容器组件和展示组件相分离的开发思想。明智的做法是只在最顶层组件 Container Components（如路由操作）里使用Redux。
 * 其余内部组件仅仅是展示性的，所有数据都通过props 传入。
 * 在这个todo 应用中，只应有一个容器组件，它存在于组件的最顶层。在复杂的应用中，也有可能会有多个容器组件。虽然你也可以嵌套使用容器组件，
 * 但应该尽可能的使用传递props 的形式。
 *
 *
 * Application 设计概要：
 * 我们想要显示一个todo项的列表。一个todo项被点击后，会增加一条删除线并标记completed。我们会显示用户新增一个todo字段。在footer
 * 里显示一个可切换的显示全部/只显示 completed 的/只显示 incompleted 的todos。
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class AppContainer extends Component {
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))} />
        <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
      </div>
    )
  }
}

AppContainer.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}
// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(AppContainer) 中；
export default connect(select)(AppContainer);