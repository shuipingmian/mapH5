<template>
  <div class="page">
    <div id="mapContainer"></div>
    <List ref="showList" @fun="findMarker" />
    <detailList ref="showDetails" :detail-data="detailData" />
  </div>
</template>

<script type="text/ecmascript-6">
import List from "@/components/list"
import detailList from "@/components/list/details"
import { getItemList } from "@/apis/item"
export default {
  components: {
    List,
    detailList
  },
  data () {
    return {
      map: null,
      mapListData: [],
      detailData: []
    }
  },
  created() {

  },
  mounted () {
    this.getMapListData();
  },
  methods: {
    mapInit () {
      const that = this;
      const details = this.$refs.showDetails.$children[0]
      const list = this.$refs.showList.$children[0]
      this.map = new AMap.Map("mapContainer", {  // eslint-disable-line 
        resizeEnable: true,
        zoom: 11, // 级别120.174054,30.259348
        center: [120.1740, 30.2593]// 中心点坐标
      });
      this.map.clearMap();
      this.mapListData.forEach((d) => {
        var icon = new AMap.Icon({// eslint-disable-line 
          image: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-" + d.color + ".png",
          imageSize: new AMap.Size(24, 30) // eslint-disable-line 
        });
        var marker = new AMap.Marker({   // eslint-disable-line 
          position: d.place,  // eslint-disable-line 
          title: d.type,
          offset: new AMap.Pixel(-12, -12),// eslint-disable-line
          map: this.map,
          icon: icon
        });
        marker.on("click", function(data) {
          that.map.setZoomAndCenter(14, [data.lnglat.lng, data.lnglat.lat]);
          details.show();
          list.hide();
          that.detailData = data
        })
      })
    },
    findMarker(lnglat) {
      this.map.setZoomAndCenter(14, lnglat)
    },
    getMapListData() {
      const params = {
        page: 1 || 0
      }
      const sceneId = this.$store.state.sceneId
      if (sceneId) params.scene_id = sceneId
      getItemList(params).then(res => {
        this.mapListData = res.data.list;
        this.mapListData.forEach((d) => {
          if (d.type === "指挥调度") {
            d.color = "default"
          }
          if (d.type === "专项整治") {
            d.color = "default"
          }
          if (d.type === "交通执法") {
            d.color = "red"
          }
          this.mapInit();
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
