<template>
  <div class="page">
    <headtitle :router-from="routerFrom" :title="fields[fields.length-1].headtitlename" />
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
// import mapInit from "../map"
import PublicProcessing from "@/components/PublicProcessing/PublicProcessing"
import Progress from "../progress" ;
import headtitle from "../headTitle/headTitle";
export default {
  components: {
    PublicProcessing,
    headtitle
    // mapInit
  },
  data () {
    return {
      routerFrom: "",
      model: {
        disposaltime: "",
        disposalobeject: "",
        describe: "",
        uploadValue: [],
        textareaValue: "",
        note: "",
        test: ""
      },
      fields: [
        {
          component: Progress,
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
          label: "处置时间",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true,
            notWhitespace: true
          }
        },
        {
          type: "input",
          modelKey: "disposalobeject",
          label: "处置对象",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "input",
          modelKey: "describe",
          label: "事件描述",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "textarea",
          modelKey: "textareaValue",
          label: "处置认定",
          props: {
            placeholder: "请输入"
          },
          rules: {
            required: true
          }
        },
        {
          type: "upload",
          modelKey: "uploadValue",
          label: "拍照取证",
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
          headtitlename: "交通执法",
          buttonname: "处置完成"
        }
      ]
    }
  },
  created() {

  },
  mounted () {
    console.log(this.routerFrom)
  },
  beforeRouteEnter(to, from, next) {
    next(vm => { //  这里的vm指的就是vue实例，可以用来当做this使用
      vm.routerFrom = from.path;
    })
  },
  methods: {
    submitS(data) {
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
  z-index: 120 !important;
  .padding-left{
    height: 90%;
  }
}
</style>
