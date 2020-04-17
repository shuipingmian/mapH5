<template>
  <cube-popup v-show="isVisible" id="list" ref="detailList" class="popup" position="bottom" :mask="false">
    <div ref="comheight" class="gongdan">
      <div @click="checkheight()">
        <i v-if="false" class="icon-down"></i>
        <i :class="[iconcheck ? 'icon-down' : 'icon-top']"></i>
      </div>
      <ul class="gongdanList">
        <li v-for="item in deetdata" :key="item.id">
          <div class="information">
            <div class="title">
              <div :class="item.color"></div>
              <p>{{ item.type }}</p>
            </div>
            <div class="content">
              <p>{{ item.describe }}</p>
            </div>
            <div class="timing">
              <p>{{ item.time }}</p>
            </div>
            <div class="source">
              <p>{{ item.from }}</p>
            </div>
          </div>
          <div class="btn">
            <p class="result">未处理</p>
            <div class="goback" @click="goback">
              返回工单列表
            </div>
          </div>
        </li>
      </ul>
      <div class="management" @click="gopublicProcessing">
        去处置
      </div>
      <!-- <div class="details">
        <div class="title">
          <p>事故车辆信息</p>
        </div>
        <div class="vehicleInfo">
          <ul>
            <li>
              <div class="LicensePlate">
                <p>浙A88888</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="videoList">

      </div> -->
    </div>
  </cube-popup>
</template>
<script>
import visibilityMixin from "@/common/mixins/visibility"

export default {
  name: "Details",
  mixins: [visibilityMixin],
  data() {
    return {
      deetdata: [],
      iconcheck: false,
      virtualData: []
    }
  },
  watch: {
    deetdata(newData, oldData) {
      if (newData[0]) {
        if (newData[0].type === "指挥调度") {
          newData[0].color = "ball-yellow ball"
        }
        if (newData[0].type === "专项整治") {
          newData[0].color = "ball-orange ball"
        }
        if (newData[0].type === "交通执法") {
          newData[0].color = "ball-red ball"
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    checkheight() {
      // 获取屏幕的高度 取80%
      const stillheight = screen.availHeight * (0.8)
      if (this.$refs.comheight.offsetHeight >= 300) {
        this.iconcheck = false
        this.$refs.comheight.style.height = "260px";
      } else {
        console.log(this.$refs.comheight.style.height, this.$refs.comheight.offsetHeight)
        this.$refs.comheight.style.height = stillheight + "px";
        this.iconcheck = true
      }
    },
    gopublicProcessing() {
      this.$router.replace("/disposestory")
    },
    // 返回列表
    goback() {
      const details = this.$parent.$children[1].$children[0];
      const list = this.$parent.$children[0].$children[0];
      details.hide();
      list.show();
      this.deetdata = []
      this.iconcheck = false
      this.$refs.comheight.style.height = "260px";
    }
  }
}
</script>
<style lang="less" scoped>
#list{
  position: absolute;
  overflow: hidden;
  width: 100%;
}
.gongdan{
  margin-bottom: -2px;
  height: 260px;
  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: .8s;
  .gongdanList {
    overflow-y: auto;
    max-height:220px;
    li{
      display: flex;
      justify-content: space-between;
      padding:0px 20px 20px 20px;
      font-size: 10.66px;
      color:#666;
      .information{
        text-align: left;
      }
      div{
        margin-top:9.33px;
      }
      .title{
        display: flex;
        justify-content: start;
        font-size:16px;
        color:#333;
        .ball{
          width:11.33px;
          height:11.33px;
          margin-top:2px;
          margin-right:10px;
          border-radius: 50%;
        }
        .ball-red{
          background-color: #FB2626;
        }
        .ball-yellow{
          background-color: #F6D80B;
        }
        .ball-orange{
          background-color: #FF7022;
        }
      }
      .content{
        font-size:13.33px;
      }
      .source{
        color:#999;
      }
      .btn{
        .result{
          color:#FF5050;
          font-size:13.33px;
          text-align: right;
          margin-top:10px;
        }
      }
    }
  }
  .goback{
    width:100px;
    height:35.66px;
    line-height: 35.66px;
    padding-top:18px;
    border-radius: 13.33px;
    text-align: right;
    // color:#fff;
    // background-color: #532BFF;
  }
  .management{
    position: absolute;
    bottom: 20px;
    width:341.66px;
    height:46px;
    line-height: 46px;
    font-size: 16.66px;
    margin:0 20px;
    border-radius: 23.33px;
    color:#fff;
    background:linear-gradient(to left,#004EFF,#34AEFB);
  }
  .details{
    width:100%;
    .title{
      font-size:13.33px;
    }
  }
}
</style>
