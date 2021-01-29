<template>
  <div>
    <button @click="changeNum">
      -
    </button>
    {{ parentNum }} <br />
    <button @click="changeName">更改姓名</button>
    姓名：{{ person.name }} <br />
    年龄：{{ person.age }}
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    parentNum: {
      type: Number,
      default: 0
    },
    person: {
      type: Object
    }
  },
  data() {
    return {
      newNum: this.parentNum
    }
  },
  computed: {
    currentPerson: {
      get() {
        return this.person
      },
      set(val) {
        this.$emit('update:person', val)
      }
    }
  },
  methods: {
    changeNum() {
      this.newNum--
      this.$emit('update:parentNum', this.newNum)
    },
    changeName() {
      this.currentPerson.name = 'zks'
    }
  }
}
</script>

<style lang="less" scoped></style>
