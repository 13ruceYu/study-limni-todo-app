<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected">
      <AppBar @left="unselectTodo" />
      <Todo :todo="selected.todo" :active="true" @close="unselectTodo"></Todo>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AppBar from './AppBar'
import Todo from './Todo'
export default {
  name: 'TodoListDetail',
  components: { AppBar, Todo },
  data() {
    return {}
  },
  computed: {
    ...mapState(['selected', 'unselected'])
  },
  methods: {
    ...mapMutations(['unselectTodo']),
    handleEnter(el) {
      Object.assign(el.style, {
        top: `${this.selected.rect.top}px`,
        left: `${this.selected.rect.left}px`,
        width: `${this.selected.rect.width}px`,
        height: `${this.selected.rect.height}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.rect.appWidth}px`,
          height: `${this.selected.rect.appHeight}px`
        })
      }, 0)
    },
    handleLeave(el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.rect.appWidth}px`,
        height: `${this.unselect.rect.appHeight}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.unselect.rect.top}px`,
          left: `${this.unselect.rect.left}px`,
          width: `${this.unselect.rect.width}px`,
          height: `${this.unselect.rect.height}px`
        })
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.todo-detail {
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #666;
}
</style>
