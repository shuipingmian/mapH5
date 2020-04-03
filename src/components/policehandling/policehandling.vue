<template>
  <div class="page">
    <div id="mapContainer"></div>
    <List />
  </div>
</template>

<script type="text/ecmascript-6">
import List from "@/components/list"
export default {
  components: {
    List
  },
  data() {
    return {
    }
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      const mapList = [{ position: [116.4, 40], title: "marker1", color: "red" }, { position: [116.5, 40], title: "marker2", color: "default" }, { position: [116.3, 39.9], title: "marker3", color: "default" }, { position: [116.45, 39.8], title: "marker4", color: "red" }]
      const map = new AMap.Map("mapContainer", {  // eslint-disable-line 
        resizeEnable: true,
        zoom: 11, // 级别
        center: [116.397428, 39.90923]// 中心点坐标
      });
      map.clearMap();
      mapList.forEach((d) => {
        var icon = new AMap.Icon({// eslint-disable-line 
          image: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-" + d.color + ".png",
          imageSize: new AMap.Size(24, 30) // eslint-disable-line 
        });
        var marker = new AMap.Marker({   // eslint-disable-line 
          position: d.position,  // eslint-disable-line 
          title: d.title,
          offset: new AMap.Pixel(-12, -12),// eslint-disable-line
          map: map,
          icon: icon
        });
        marker.on("click", function() {

        })
      })
    }
  }

}
</script>

<style scoped>
.page {
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
