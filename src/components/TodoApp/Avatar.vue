<template>
  <div id="avatar" :class="{ avatar__selected: !!selected }">
    <div class="avatar_face">
      <img src="../../assets/avatar.png" />
    </div>
    <div class="avatar_name">Hello, {{ username }}</div>
    <p class="avatar_tips">
      Looks like feed good.<br />
      You have {{ todayTasks.length }} tasks to do today.
    </p>
    <p class="avatar_date">TODAY : {{ today | dateString }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: '',
  components: {},
  data() {
    return {
      today: new Date()
    }
  },
  computed: {
    ...mapState(['username']),
    ...mapState(['selected']),
    ...mapGetters(['todayTasks'])
  },
  filters: {
    dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ', $1')
    }
  },
  methods: {}
}
</script>

<style lang="less">
#avatar {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 300px;
  padding: 0 40px;
  transition: all 0.5s ease;

  .avatar_face {
    height: 44px;
    width: 44px;
    border-radius: 100%;
    border: 1px solid #ddd;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .avatar_name,
  .avatar_tips,
  .avatar_date {
    padding: 0 6px;
  }

  .avatar_name {
    margin-top: 32px;
    font-size: 32px;
    letter-spacing: 1px;
    font-weight: 300;
  }

  .avatar_tips {
    margin-top: 16px;
    font-size: 12px;
    font-weight: 100;
    opacity: 0.8;
    line-height: 1.6em;
  }

  .avatar_date {
    margin-top: 44px;
    font-size: 14px;
  }
}

.avatar__selected {
  transform: translateY(20px);
  opacity: 0;
}
</style>
