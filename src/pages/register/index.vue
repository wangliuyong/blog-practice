<template>
  <div class="index-page">
    <span class="p">{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: '注册页面'
      }
    }
  }
</script>

<style scoped  lang="scss" >
  @import './index.scss';
</style>
