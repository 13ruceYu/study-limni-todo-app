<template>
  <div id="todo-app">
    <Gradient />
    <AppBar
      title="Yo"
      left="bars"
      right="search"
      @left="handleOptionClick"
      @right="handleSearchClick"
    />
    <Avatar />
    <TodoList />
    <TodoListDetail />
    <FloatingButton />
    <TodoEditing />
  </div>
</template>

<script>
import AppBar from '../components/TodoApp/AppBar'
import Avatar from '../components/TodoApp/Avatar'
import Gradient from '../components/TodoApp/Gradient'
import TodoList from '../components/TodoApp/TodoList'
import TodoListDetail from '../components/TodoApp/TodoListDetail'
import FloatingButton from '../components/TodoApp/FloatingButton'
import TodoEditing from '../components/TodoApp/TodoEditing'
export default {
  name: 'TodoApp',
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoListDetail,
    FloatingButton,
    TodoEditing
  },
  data() {
    return {}
  },
  methods: {
    handleOptionClick() {
      console.log('option')
    },
    handleSearchClick() {
      console.log('search')
    }
  }
}
</script>

<style lang="less">
#todo-app {
  color: #fff;
  width: 100%;
  padding-bottom: 20px;
  overflow: hidden;
}
</style>
