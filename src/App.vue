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
  data() {
    return {
      tabs: [
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
      ],
      tabs1: [
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
      ]
    }
  },

  created() {
    this._logon()
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
    },
    // 假装获取到了登录信息  cont police 警察  // cont Auxiliary police 辅警
    _logon() {
      // const police = "police"
      // const Auxiliary_police = "Auxiliary_police"
      // 可手动修改登录权限 _logon
      const _logon = "police"
      if (_logon === "police") {
        return
      } else if (_logon === "Auxiliary_police") {
        this.tabs = this.tabs1
      }
      console.log(this.tabs, this.tabs1)
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
