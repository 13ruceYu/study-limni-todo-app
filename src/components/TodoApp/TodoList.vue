<template>
  <div class="todo-list" :class="{ 'todo-list__selected': !!selected }">
    <ul :style="{ width: `${todos.length * 100}%` }">
      <li
        v-for="todo in todos"
        :key="todo.name"
        :style="{ transform: `translate3s(-${currentIndex * 100}%, 0, 0)` }"
      >
        <Todo
          :todo="todo"
          :selected="selected && todo === selected.todo"
          @select="selectTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Todo from './Todo'
export default {
  name: 'TodoList',
  components: { Todo },
  data() {
    return {}
  },
  computed: {
    ...mapState(['todos', 'currentIndex', 'selected'])
  },
  methods: {
    ...mapMutations(['selectTodo', 'nextTodo', 'prevTodo'])
  }
}
</script>

<style lang="less"></style>
