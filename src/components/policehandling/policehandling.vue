<template>
  <div class="page">
    <div id="mapContainer"></div>
    <List ref="showList" />
  </div>
</template>

<script type="text/ecmascript-6">
import List from "@/components/list"
export default {
  components: {
    List
  },
  data () {
    return {
    }
  },
  mounted () {
    this.mapInit();
  },
  methods: {
    mapInit () {
      const that = this;
      const mapList = [{ position: [120, 30.1], title: "marker1", color: "red" }, { position: [120.3, 30.2], title: "marker2", color: "default" }, { position: [120.3, 29.9], title: "marker3", color: "default" }, { position: [120.45, 30], title: "marker4", color: "red" }]
      const map = new AMap.Map("mapContainer", {  // eslint-disable-line 
        resizeEnable: true,
        zoom: 11, // 级别120.174054,30.259348
        center: [120.1740, 30.2593]// 中心点坐标
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
        marker.on("click", function(data) {
          const component = that.$refs.showList.$children[0];
          component.show();
        })
      })
    }

  }

}
</script>

<style>
.page {
  width: 100%;
  height: 100%;
}
#mapContainer {
  height: 94%;
}
.amap-logo,
.amap-copyright {
  display: none !important;
}
</style>
