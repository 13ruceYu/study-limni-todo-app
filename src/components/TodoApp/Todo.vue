<template>
  <div class="todo" :class="{ todo__selected: selected }">
    <div class="todo_head" @click="handleClick">
      <div class="todo_icon" :style="{ color }">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu"><i class="fa fa-ellipsis-v"></i></div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todo.tasks.length }} Tasks</p>
      <h3 class="todo_title">{{ todo.name }}</h3>
      <div class="todo_progress">
        <span class="todo_progress_line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <div class="todo_progress_num">{{ progress }}</div>
      </div>
      <div class="todo_tasks">
        <h4 class="todo_subtitle" v-if="todayTasks.length">Today</h4>
        <ul>
          <li v-for="task in todayTasks" :key="task.id">
            <Task :todo="todo" :task="task" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { today, tomorrow } from '../../utils/date'
import Task from './Task'
export default {
  name: 'Todo',
  components: { Task },
  props: {
    todo: {
      type: Object,
      require: true
    },
    selected: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  computed: {
    color() {
      return this.todo.colors[0]
    },
    progress() {
      const totalCount = this.todo.tasks.filter(t => !t.deleted).length
      const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length
      return `${Math.round((doneCount / totalCount) * 100)}%`
    },
    progressColor() {
      const colorLeft = `color-stop(30%, ${this.todo.colors[0]})`
      const colorRight = `to(${this.todo.colors[1]})`
      return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
    },
    todayTasks() {
      return this.todo.tasks.filter(task => {
        return task.date >= tomorrow
      })
    },
    outdatedTasks() {
      return this.todo.tasks.filter(task => {
        return task.date < today
      })
    }
  },
  methods: {
    handleClick() {
      const appRect = document.querySelector('#app').getBoundingClientRect()
      console.log(appRect)
      const elRect = this.$el.getBoundingClientRect()
      const todo = this.todo
      const rect = {}
      rect.top = elRect.top - appRect.top
      rect.left = elRect.left - appRect.left
      rect.width = elRect.width
      rect.height = elRect.height
      rect.appWidth = appRect.width
      rect.appHeight = appRect.height
      this.$emit('select', { rect, todo })
    }
  }
}
</script>

<style lang="less">
.todo {
  flex: 1;
  margin: 0 8px;
  color: #666;
  .todo_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    transform: translate3d(0, 0, 0);
    .todo_icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      font-size: 18px;
      border: 1px solid #eee;
      border-radius: 100%;
    }
    .todo_menu {
      color: #eee;
    }
  }
  .todo_body {
    padding: 0 20px;
    transform: translate3d(0, 189px, 0);
    .todo_tips {
      font-size: 13px;
      font-weight: 600;
      opacity: 0.6;
    }
    .todo_title {
      margin-top: 6px;
      font-size: 32px;
    }
    .todo_progress {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .todo_progress_line {
        margin-right: 10px;
        flex: 1;
        height: 3px;
        background: #eee;

        i {
          display: block;
          height: 100%;
          transition: all 0.3s ease;
        }
      }
      .todo_progress_num {
        font-size: 12px;
      }
    }
    .todo_tasks {
      opacity: 0;
      transform: scale3d(1, 0, 1);
      .todo_subtitle {
        margin-top: 32px;
        margin-bottom: 8px;
        color: #999;
      }
    }
  }
}

.todo__selected {
  visibility: hidden;
}
</style>
