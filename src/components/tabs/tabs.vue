<template>
  <div class="tab">
    <div class="slide-wrapper">
      <cube-slide
        ref="slide"
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component
            :is="tab.component"
            ref="component"
            :data="tab.data"
          ></component>
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="tabslist">
      <!-- <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        :use-transition="true"
        :show-slider="true"
        @click="setcliek(tabs)"
      >
      </cube-tab-bar> -->
      <cube-tab-bar
        ref="tabBar"
        v-model="selectedLabel"
        :use-transition="false"
        :show-slider="true"
        :data="tabs"
        class="border-bottom-1px"
      >
        <cube-tab v-for="item in tabs" :key="item.label" :label="item.label">
          <i slot="icon" class="cubeic-home"></i>
          <div>{{ item.label }}</div>
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
      selectedLabelDefault: "警情处置",
      tab: [
        {
          label: "Home",
          icon: "cubeic-home"
        },
        {
          label: "Like",
          icon: "cubeic-like"
        },
        {
          label: "Vip",
          icon: "cubeic-vip"
        },
        {
          label: "Me",
          icon: "cubeic-person"
        }
      ],
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
    this.onChange(this.index);
  },
  methods: {
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
.tab {
  height: 100%;
  .slide-wrapper {
    width: 100%;
    height:100%;
    flex: 1;
    overflow: hidden;
  }
  .tabslist {
    z-index: 100000;
    background-color: #ffffff;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    .cube-tab {
      padding: 10px;
    }
  }
}
</style>
