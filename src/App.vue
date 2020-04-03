<template>
  <div id="app">
    <div id="nav">
      <tabs :tabs="tabs"></tabs>
    </div>
    <router-view />
  </div>
</template>
<script>
import tabs from "@/components/tabs/tabs";
import basicmatters from "@/components/basicmatters/basicmatters";
import policehandling from "@/components/policehandling/policehandling";
export default {
  components: {
    tabs
  },
  computed: {
    tabs() {
      return [
        {
          label: "警情处置",
          component: policehandling,
          icon: "cubeic-home",
          data: {
            seller: this.seller
          }
        },
        {
          label: "基层基础",
          component: basicmatters,
          icon: "cubeic-home",
          data: {
            seller: this.seller
          }
        },
        {
          label: "特勤保障",
          icon: "cubeic-home",
          component: policehandling,
          data: {
            seller: this.seller
          }
        },
        {
          label: "突发上报",
          icon: "cubeic-home",
          component: policehandling,
          data: {
            seller: this.seller
          }
        },
        {
          label: "个人中心",
          icon: "cubeic-home",
          component: policehandling,
          data: {
            seller: this.seller
          }
        }
      ];
    }
  }
};
</script>
<style lang="less">
html,body,#app,#nav{
  width:100%;
  height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
