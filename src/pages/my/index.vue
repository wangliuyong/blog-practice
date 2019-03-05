<template>
  <div class="index-page">
    <span class="p">{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'My',
    data () {
      return {
        msg: '我的页面'
      }
    }
  }
</script>

<style scoped  lang="scss" >
  @import './index.scss';
</style>
