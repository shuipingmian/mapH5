<template>
  <div class="page">
    <div id="mapContainer"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {
    }
  },
  mounted() {
    this.mapInit()
  },
  methods: {
    mapInit() {
      var map = new AMap.Map("mapContainer", { // eslint-disable-line no-undef
        resizeEnable: true,
        zoom: 11, // 级别
        center: [116.397428, 39.90923]// 中心点坐标
      });
      var marker = new AMap.Marker({ // eslint-disable-line no-undef
        position: new AMap.LngLat(116.39, 39.9), // eslint-disable-line no-undef
        title: "北京"
      });
      map.add(marker)
    }
  }

}
</script>

<style scoped>
.page {
  background-color: red;
  width: 100%;
  height: 100%;
}
#mapContainer {
  height: 94%;
}
.amap-logo {
  display: none !important;
}
.amap-copyright {
  opacity: 0 !important;
}
</style>
