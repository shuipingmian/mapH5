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
export default {
  name: "List",
  data() {
    return {
      virtualData: [
        { id: 1, title: "交通执法", content: "江南大道江虹路北汽车刮蹭事故", timing: "2020/03/21 00:00:18", source: "来源：警务系统", color: "ball-red ball" },
        { id: 2, title: "指挥调度", content: "江南大道江虹路北汽车刮蹭事故", timing: "2020/03/21 00:00:18", source: "来源：警务系统", color: "ball-yellow ball" },
        { id: 3, title: "专项整治", content: "江南大道江虹路北汽车刮蹭事故", timing: "2020/03/21 00:00:18", source: "来源：警务系统", color: "ball-orange ball" }
      ]
    }
  },
  mounted() {
    this.showList();
  },
  methods: {
    showList() {
      const component = this.$refs.showList;
      component.show();
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
    height:220px;
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
