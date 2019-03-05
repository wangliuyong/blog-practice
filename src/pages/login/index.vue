<template>
  <div class="index-page">
    <span class="p">{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: '登录页面'
      }
    }
  }
</script>
<style scoped  lang="scss" >
  @import './index.scss';
</style>
