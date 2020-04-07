<template>
  <div class="page">
    <div id="mapContainer"></div>
    <List ref="showList" />
    <detailList ref="showDetails" :detail-data="detailData" />
  </div>
</template>

<script type="text/ecmascript-6">
import List from "@/components/list"
import detailList from "@/components/list/details"
export default {
  components: {
    List,
    detailList
  },
  data () {
    return {
      listData: [],
      detailData: []
    }
  },
  mounted () {
    this.mapInit();
  },
  methods: {
    mapInit () {
      const that = this;
      const details = this.$refs.showDetails.$children[0]
      const list = this.$refs.showList.$children[0]
      const mapList = [{ position: [120, 30.1], title: "交通执法", color: "red" }, { position: [120.3, 30.2], title: "指挥调度", color: "default" }, { position: [120.3, 29.9], title: "专项整治", color: "default" }, { position: [120.45, 30], title: "交通执法", color: "red" }]
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
          map.setZoomAndCenter(14, [data.lnglat.lng, data.lnglat.lat]);
          details.show();
          list.hide();
          that.detailData = data
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
