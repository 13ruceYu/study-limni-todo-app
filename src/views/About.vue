<template>
  <div class="about">
    <ChildSync :parentNum.sync="parentNum" :person.sync="person"></ChildSync>
  </div>
</template>
<script>
import ChildSync from '../components/ChildSync'
export default {
  name: 'About',
  components: { ChildSync },
  data() {
    return {
      parentNum: 1,
      person: {
        name: 'whh',
        age: 24
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>
