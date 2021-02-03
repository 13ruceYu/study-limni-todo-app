<template>
  <div
    class="gradient_color"
    :class="{ gradient_color__active: active }"
    :style="{ backgroundImage: gradientColor }"
  ></div>
</template>

<script>
export default {
  name: 'GradientColor',
  components: {},
  props: {
    colors: {
      type: Array
    },
    active: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  computed: {
    gradientColor() {
      // const colorBottom = `color-stop(30%, ${this.colors[0]})`
      // const colorTop = `to(${this.colors[1]})`
      return `linear-gradient(to top, ${this.colors[0]}, ${this.colors[1]})`
    }
  },
  methods: {}
}
</script>

<style lang="less">
.gradient_color {
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.gradient_color__active {
  opacity: 1;
}
</style>
