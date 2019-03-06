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
        msg: 'Welcome Wang liu  yong'
      }
    },
    methods:{
      on_click(){
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style scoped  lang="scss" >
  @import './index.scss';
</style>
