<template>
  <transition name="edit">
    <div class="todo-editing" v-if="!!editing">
      <AppBar title="New Tasks" left="close" @left="toggleEditing" />
      <div class="todo-editing_head">
        <p>What tasks are you planning to perform?</p>
      </div>
      <div class="todo-editing_body">
        <textarea rows="3" v-model="editing.text"></textarea>
        <p class="todo-editing_meta">
          <i :class="['fa', `fa-${selected.todo.icon}`]"></i>
          {{ selected.todo.name }}
        </p>
        <p class="todo-editing_meta">
          <i class="fa fa-calendar"></i>
          Today
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import AppBar from './AppBar'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TodoEditing',
  components: { AppBar },
  data() {
    return {}
  },
  computed: {
    ...mapState('todo', ['selected', 'editing'])
  },
  methods: {
    ...mapMutations('todo', ['toggleEditing'])
  }
}
</script>

<style lang="less">
.todo-editing {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: #fff;
  color: #666;
  .todo-editing_head {
    padding: 40px 40px 0;
    color: #999;
  }
  .todo-editing_body {
    padding: 0 40px;
    textarea {
      width: 100%;
      margin: 6px 0;
      font-size: 32px;
      line-height: 1.2em;
      outline: none;
      border: none;
      color: #666;
      // background: #eee;
      resize: none;
      &::placeholder {
        color: #999;
      }
    }
    .todo-editing_meta {
      display: flex;
      height: 44px;
      align-items: center;
      border-bottom: 1px solid #eee;
      color: #999;

      i {
        padding-right: 10px;
      }
    }
  }
}

.edit-leave-to,
.edit-enter {
  transform: translateY(100%);
}
.edit-enter-to,
.edit-leave {
  transform: translateY(0);
}
.edit-enter-active {
  transition: all 0.5s ease;
}
.edit-leave-active {
  transition: all 0.5s ease;
}
</style>
