<template>
  <cube-popup id="list" class="popup" position="bottom" :mask="false">
    <div class="gongdan">
      <ul class="gongdanList">
        <li v-for="item in virtualData" :key="item.id">
          <div class="information">
            <div class="title">
              <div :class="item.color"></div>
              <p>{{ item.title }}</p>
            </div>
            <div class="content">
              <p>{{ item.content }}</p>
            </div>
            <div class="timing">
              <p>{{ item.timing }}</p>
            </div>
            <div class="source">
              <p>{{ item.source }}</p>
            </div>
          </div>
          <div class="btn">
            <p class="result">未处理</p>
          </div>
        </li>
      </ul>
      <div class="management">
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
export default {
  name: "Details",
  props: ["detailData"],
  data() {
    return {
      virtualData: [
        { id: 1, title: "交通执法", content: "江南大道江虹路北汽车刮蹭事故", timing: "2020/03/21 00:00:18", source: "来源：警务系统", color: "ball-red ball" }
      ]
    }
  },
  watch: {
    detailData(newData, oldData) {
      const type = newData.target.De.title
      this.virtualData[0].title = type;
      if (type === "指挥调度") {
        this.virtualData[0].color = "ball-yellow ball"
      }
      if (type === "专项整治") {
        this.virtualData[0].color = "ball-orange ball"
      }
    }
  },
  methods: {
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
  padding-bottom:60px;
  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
          padding-right:5px;
        }
      }
    }
  }
  .management{
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
