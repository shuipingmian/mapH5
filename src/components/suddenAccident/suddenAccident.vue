<template>
  <div class="page">
    <headtitle :router-from="routerFrom" :title="fields[fields.length-1].headtitlename" @back="backtabshow()" />
    <div class="padding-left">
      <cube-scroll
        ref="scroll"
        class="horizontal-scroll-list-wrap"
        style="z-index:100;"
      >
        <PublicProcessing :fields="fields" :model="model" :router-from="routerFrom" @submitSuccess="submitS" />
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import PublicProcessing from "@/components/PublicProcessing/PublicProcessing";
import Progress from "../progress" ;
import headtitle from "../headTitle/headTitle";
import Location from "../location"
export default {
  components: {
    // Location,
    PublicProcessing,
    headtitle,
    Progress,   // eslint-disable-line 
    // mapInit
  },
  data () {
    return {
      routerFrom: "",
      model: {
        disposaltime: "",
        disposalobeject: "2017",
        describe: "3",
        uploadValue: [],
        textareaValue: "3",
        note: "3",
        test: "3"
      },
      fields: [
        {
          component: Location,
          modelKey: "test",
          rules: {
            required: true
          },
          messages: {
            required: "请选择"
          }
        },
        {
          type: "input",
          modelKey: "disposaltime",
          label: "上报时间",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true,
            notWhitespace: true
          }
        },
        {
          type: "select",
          modelKey: "disposalobeject",
          label: "事件类型",
          props: {
            options: ["交通事故", "特勤保障", "信息采集", "特殊情况", "特勤保障", "特勤保障"]
          },
          rules: {
            required: true
          }
        },
        {
          type: "textarea",
          modelKey: "describe",
          label: "事件描述",
          props: {
            maxlength: 160,
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "upload",
          modelKey: "uploadValue",
          label: "现场照片",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "textarea",
          modelKey: "note",
          label: "备注",
          props: {
            maxlength: 160,
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "input",
          headtitlename: "突发上报",
          buttonname: "立即上报"
        }
      ]
    }
  },
  created() {

  },
  mounted () {
    this.test()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => { //  这里的vm指的就是vue实例，可以用来当做this使用
      vm.routerFrom = from.path;
    })
  },
  methods: {
    // 显示tablist
    backtabshow() {
      this.$parent.show()
    },
    // 隐藏tablist
    test() {
      this.$parent.hide()
    },
    submitS(data) {
      this.$parent.show();
      // 后期在这里向服务器发送数据
      console.log(data)
    }
  }

}
</script>

<style scoped lang="less">
.page{
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
  background: #fff;
  z-index: 10 !important;
  .padding-left{
    height: 90%;
    padding: 1px 10px;
  }
}
</style>
