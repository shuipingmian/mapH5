<template>
  <cube-popup id="list" class="popup" position="bottom" :mask="false">
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
        <li>
          <div class="information">
            <div class="title">交通执法</div>
            <div class="content">
              <p>江南大道江虹路北汽车刮蹭事故</p>
            </div>
            <div class="timing">
              <p>2020/03/21 00:00:18</p>
            </div>
            <div class="source">
              <p>来源：警务系统</p>
            </div>
          </div>
          <div class="btn">
            <p class="result">未处理</p>
            <div class="management">
              去处置
            </div>
          </div>
        </li>
      </ul>
    </div>
  </cube-popup>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      gongdanListData: [""]
    }
  },
  methods: {
  }
}
</script>
<style scoped lang='less'>
#list{
  position: absolute;
  overflow-y: auto;
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
    li{
      display: flex;
      justify-content: space-between;
      padding:20px;
      padding-top:0;
      font-size: 10.66px;
      color:#666;
      .information{
        text-align: left;
      }
      div{
        margin-top:9.33px;
      }
      .title{
        font-size:16px;
        color:#333;
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
