<template>
  <div class="tab">
    <div class="slide-wrapper">
      <transition name="slide-fade">

        <router-view></router-view>

      </transition>
    </div>
    <div class="tabslist">
      <cube-tab-bar
        ref="tabBar"
        v-model="selectedLabel"
        :use-transition="true"
        :show-slider="true"
        :data="tabs"
      >
        <cube-tab v-for="item in tabs" :key="item.label" :label="item.label">
          <i slot="icon" :class="item.icon" @click="routepush(item.path)"></i>
          <div class="font-tab" @click="routepush(item.path)">{{ item.label }}</div>
        </cube-tab>
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    };
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label;
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal;
        });
      }
    }
  },
  mounted() {
    // this.onChange(this.index);
  },
  methods: {
    routepush(routersrc) {
      this.$router.replace(routersrc)
    },
    setcliek(opa) {
      console.log(opa);
    },
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth;
      const slideWidth = this.$refs.slide.slide.scrollerWidth;
      const transform = (-pos.x / slideWidth) * tabBarWidth;
      this.$refs.tabBar.setSliderTransform(transform);
    },
    onChange(current) {
      this.index = current;
      const instance = this.$refs.component[current];
      if (instance && instance.fetch) {
        instance.fetch();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/less/icon";
.tab {
  overflow: hidden;
  height: 100%;
  z-index: 50;
  .slide-wrapper {
    width: 100%;
    height:100%;
    flex: 1;
    overflow: hidden;
    // 路由动画效果
.slide-fade{
 position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
 transition: all 0.6s ease;
}
.slide-fade-leave-active {
 transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
 left:0;right: 0;
 transform: translateX(3px);
 opacity: 0;
}
  }
  .tabslist {
    z-index: 98;
    background-color: #ffffff;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0;
    font-size: 12px;
    .font-tab{
      font-size: 10px;
    }
    .cube-tab {
      padding: 10px;
    }
  }
}
</style>
