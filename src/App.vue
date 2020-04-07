<template>
  <div id="app">
    <div id="nav">
      <tabs :tabs="tabs"></tabs>
    </div>
  </div>
</template>
<script>
import { getItemList } from "@/apis/item"
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
          path: "/policehandling",
          icon: "icon-plicion",
          data: {
            seller: this.seller
          }
        },
        {
          label: "基层基础",
          path: "/basicmatters",
          component: basicmatters,
          icon: "icon-fibte",
          data: {
            seller: this.seller
          }
        },
        {
          label: "特勤保障",
          icon: "icon-uniE900",
          path: "/specialcase",
          component: policehandling,
          data: {
            seller: this.seller
          }
        },
        {
          label: "突发上报",
          icon: "icon-letfain",
          path: "/suddenAccident",
          component: policehandling,
          data: {
            seller: this.seller
          }
        },
        {
          label: "个人中心",
          icon: "icon-peron",
          path: "/personalaffairs",
          component: policehandling,
          data: {
            seller: this.seller
          }
        }
      ];
    }
  },
  created() {
    this._test()
  },
  methods: {
    _test() {
      const params = {
        page: 1 || 0
      }
      const sceneId = this.$store.state.sceneId
      if (sceneId) params.scene_id = sceneId
      getItemList(params).then(res => {
      })
    }
  }
};
</script>
<style lang="less">
@import "./common/less/icon";
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
