<template>
  <div id="gradient">
    <GradientColor
      v-for="(todo, index) in todos"
      :key="index"
      :colors="todo.colors"
      :active="index <= currentIndex"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GradientColor from './GradientColor'
export default {
  name: 'Gradient',
  components: { GradientColor },
  data() {
    return {}
  },
  computed: {
    ...mapState('todo', ['todos', 'currentIndex'])
  },
  methods: {}
}
</script>

<style lang="less">
#gradient {
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
}
</style>
