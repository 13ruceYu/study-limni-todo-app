<template>
  <div class="todo-list" :class="{ 'todo-list__selected': !!selected }">
    <ul :style="{ width: `${todos.length * 100}%` }">
      <li
        v-for="todo in todos"
        :key="todo.name"
        :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
      >
        <Todo
          :todo="todo"
          :selected="selected && todo === selected.todo"
          @select="select_todo"
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
    ...mapState('todo', ['todos', 'currentIndex', 'selected'])
  },
  mounted() {
    const touch = {}
    this.$el.addEventListener('touchstart', evt => {
      touch.startX = evt.touches[0].clientX
      touch.endX = 0
    })
    this.$el.addEventListener('touchmove', evt => {
      touch.endX = evt.touches[0].clientX
    })
    this.$el.addEventListener('touchend', () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return
      }
      if (touch.endX < touch.startX) {
        this.nextTodo()
      } else {
        this.prevTodo()
      }
    })
  },
  methods: {
    ...mapMutations('todo', ['select_todo', 'nextTodo', 'prevTodo'])
  }
}
</script>

<style lang="less">
.todo-list {
  padding: 0 32px;
  height: 400px;
  transition: all 0.5s ease;

  > ul,
  > ul > li {
    display: flex;
    height: 100%;
  }
  > ul > li {
    flex: 1;
    transition: transform 0.5s ease;
  }
  .todo {
    border-radius: 8px;
    background-color: white;
  }
}
.todo-list__selected {
  transform: scaleX(1.25);
}
</style>
