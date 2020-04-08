<template>
  <cube-popup id="list" ref="showList" class="popup" position="bottom" :mask="false">
    <div class="gongdan">
      <div class="titleBar">
        <div class="today">
          <p>今日工单</p>
        </div>
        <div class="finish">
          <p>已完成</p>
        </div>
        <div class="noFinish">
          <p>未完成</p>
        </div>
      </div>
      <ul class="gongdanList">
        <cube-scroll
          ref="scroll"
          :data="virtualData"
          class="horizontal-scroll-list-wrap"
        >
          <li v-for="item in virtualData" :key="item.id" @click="findMarker(item.place)">
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
              <div class="management">
                去处置
              </div>
            </div>
          </li>
        </cube-scroll>
      </ul>
    </div>
  </cube-popup>
</template>
<script>
import { getItemList } from "@/apis/item"
export default {
  name: "List",
  data() {
    return {
      virtualData: []
    }
  },
  mounted() {
    this.showList();
    this.listInit();
  },
  methods: {
    showList() {
      const component = this.$refs.showList;
      component.show();
    },
    listInit() {
      const params = {
        page: 1 || 0
      }
      const sceneId = this.$store.state.sceneId
      if (sceneId) params.scene_id = sceneId
      getItemList(params).then(res => {
        this.virtualData = res.data.list;
        this.virtualData.forEach((d) => {
          if (d.type === "指挥调度") {
            d.color = "ball-yellow ball"
          }
          if (d.type === "专项整治") {
            d.color = "ball-orange ball"
          }
          if (d.type === "交通执法") {
            d.color = "ball-red ball"
          }
        })
      })
    },
    findMarker(lnglat) {
      this.$emit("fun", lnglat)
    }

  }
}
</script>
<style scoped lang='less'>
#list{
  position: absolute;
  overflow: hidden;
  width: 100%;
}
.gongdan{
  z-index: 101;
  padding-bottom:60px;
  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .titleBar{
    display: flex;
    justify-content: space-around;
    width: 100%;
    line-height: 26.66px;
    font-size:13.33px;
    padding-top:15px;
    div{
      width:95.33px;
      height:100%;
      color:#999;
      border:1px solid #999;
      border-radius: 13.33px;
    }
    .today{
      color:#fff;
      background-color: #008EFF;
      border-color:#008EFF;
    }
  }
  .gongdanList {
    overflow-y: auto;
    // max-height:220px;
    height: 220px;
    li{
      display: flex;
      justify-content: space-between;
      padding:0px 20px 20px 20px;
      font-size: 10.66px;
      color:#666;
      border-bottom:1px solid #DDDDDD;
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
        .management{
          width:85px;
          height:26.66px;
          line-height: 26.66px;
          border-radius: 13.33px;
          color:#fff;
          background-color: #532BFF;
          margin-top:16px;
        }
      }
    }
  }
}
</style>
