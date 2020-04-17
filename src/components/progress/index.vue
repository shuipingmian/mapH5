<template>
  <div class="progress">
    <div class="under">
      <div class="top"></div>
    </div>
    <div class="bar">
      <div class="left arrive">
        <div class="circle arriveBackground"></div>
        <p>1</p>
      </div>
      <div class="center">
        <div class="circle"></div>
        <p>2</p>
      </div>
      <div class="right">
        <div class="circle"></div>
        <p>3</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
  .progress{
    width:calc(100%-40px);
    height:120.33px;
    padding:20px;
    div{
      width:100%;
      height:2.5px;
    }
    .under{
      background-color: #666666;
      .top{
        width:50%;
        margin-top:66.33px;
        background-color: #08FACA;
      }
    }
    .bar{
      position: relative;
      div{
        position: absolute;
        width:13.33px;
        height:25px;
        top:-4px;
        color:#666666;
        .circle{
          width:13.33px;
          height:13.33px;
          border-radius: 50%;
          background-color: #666666;
        }
        p{
          position: absolute;
          width:100%;
          top:15px;
          font-size:10.66px;
          text-align: center;
        }
        .arriveBackground{
          background-color: #08FACA;
        }
      }
      .left{
        left:0;
      }
      .center{
        left:50%;
      }
      .right{
        left:98%;
      }
      .arrive{
        color:#08FACA;
      }
    }
  }
</style>
