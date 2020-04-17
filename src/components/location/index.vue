<template>
  <div id="location"></div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {

  },

  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    this.locationInit()
  },
  methods: {
    locationInit() {
      var map = new AMap.Map("location", {// eslint-disable-line 
        resizeEnable: true
      })
      AMap.plugin("AMap.Geolocation", function() {// eslint-disable-line 
        var geolocation = new AMap.Geolocation({// eslint-disable-line 
        // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),// eslint-disable-line 
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          // 重新定位按钮
          buttonPosition: "RB"
        })
        map.addControl(geolocation);
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, "complete", onComplete)// eslint-disable-line 
        AMap.event.addListener(geolocation, "error", onError)// eslint-disable-line 

        function onComplete (data) {
        // data是具体的定位信息
        }

        function onError (data) {
        // 定位出错
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
#location{
  // background: red;
  width:100%;
  height:298px;
}
</style>
