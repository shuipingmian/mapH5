<template>
  <div class="head">
    <i class="cubeic-back" @click="routerblack()"></i>
    <div class="center"><p>{{ title }}</p></div>

  </div>
</template>

<script type="text/ecmascript-6">
// 用于提交工单的头部组件 有返回方法 接收头部名称
export default {
  components: {

  },
  props: {
    title: {
      type: String,
      default: "交通执法"
    },
    routerFrom: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    routerblack() {
      this.$emit("back")
      this.$router.replace(this.routerFrom);
    }
  }
}
</script>

<style scoped lang="less">
.head{
  width: 100%;
  height: 6%;
  background: #008EFF;
  color:#FFFFFF;
   display: flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
  i{
    font-size: 13px;
    float: left;
    margin-left: 13px;
  }
  .center{
    width: 100%;
   p{
    font-size: 18px;
    margin-right: 13px;
    font-family: SourceHanSansCN-Bold;
    font-weight: Bold;
  }
  }

  // background:linear-gradient(to right,#004EFF,#129CF4);
  // background: -webkit-gradient(linear,0 0,0 100%,from(#004EFF),to(#129CF4));
}
</style>
