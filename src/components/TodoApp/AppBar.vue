<template>
  <div id="app-bar">
    <span class="app-bar_l" @click="$emit('left')">
      <i :class="['fa', `fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span class="app-bar_r" @click="$emit('right')">
      <i :class="['fa', `fa-${right}`]"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: 'chevron-left'
    },
    right: {
      type: String,
      default: 'ellipsis-v'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 16px;

  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 0;
  }

  span {
    padding: 0 20px;
  }
}
</style>
