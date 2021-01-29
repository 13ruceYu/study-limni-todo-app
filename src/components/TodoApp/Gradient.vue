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
    ...mapState(['todos', 'currentIndex'])
  },
  methods: {}
}
</script>

<style lang="less">
#gradient {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
