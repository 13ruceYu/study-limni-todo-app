import { tomorrow } from '../../utils/date'
import {
  SELECT_TODO
} from '../mutation-types'

const todo = {
  namespaced: true,
  state: {
    username: 'whh',
    currentIndex: 0,
    todos: [
      {
        icon: 'user',
        name: 'Personal',
        tasks: [
          {
            id: 1,
            title: 'Dating',
            date: new Date(),
            done: false,
            deleted: false
          }
        ],
        colors: ['#ff6262', '#ffa947']
      },
      {
        icon: 'suitcase',
        name: 'Work',
        tasks: [
          {
            id: 3,
            title: 'Design Sprint',
            date: new Date(),
            done: true,
            deleted: false
          },
          {
            id: 4,
            title: 'Icon Set Design for Mobile App',
            date: new Date(),
            done: false,
            deleted: false
          },
          {
            id: 5,
            title: 'HTML/CSS Study',
            date: new Date(),
            done: false,
            deleted: false
          }
        ],
        colors: ['#5b9df9', '#47bfff']
      },
      {
        icon: 'home',
        name: 'Home',
        tasks: [
          {
            id: 2,
            title: 'House Keeping',
            date: new Date(),
            done: true,
            deleted: false
          }
        ],
        colors: ['#2c7d59', '#3ba776']
      }
    ],

    selected: null,
    unselect: null,
    editing: null
  },
  getters: {
    currentTodo (state) {
      return state.todos[state.currentIndex]
    },
    todayTasks (state) {
      const tasks = []
      state.todos.forEach(todo => {
        todo.tasks.forEach(task => {
          if (task.date <= tomorrow && !task.done && !task.deleted) {
            tasks.push(task)
          }
        })
      })
      return tasks
    }
  },
  mutations: {
    [SELECT_TODO] (state, selected) {
      state.unselect = null
      state.selected = selected
    },
    unselectTodo (state) {
      state.unselect = state.selected
      state.selected = null
    },
    nextTodo (state) {
      if (state.currentIndex < state.todos.length - 1) {
        state.currentIndex++
      }
    },
    prevTodo (state) {
      if (state.currentIndex > 0) {
        state.currentIndex--
      }
    },
    deleteTask (_, { task }) {
      task.deleted = true
    },
    toggleEditing (state) {
      if (state.editing && state.editing.text) {
        state.selected.todo.tasks.unshift({
          title: state.editing.text,
          date: new Date(),
          done: false,
          deleted: false
        })
      }
      state.editing = state.editing ? null : { text: '' }
    }
  },
  actions: {},
}

export default todo