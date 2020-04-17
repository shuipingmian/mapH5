<template>
  <div v-show="isVisible" ref="publicProcessing" class="page">
    <div ref="coimheight" style="height:660px;z-index=189">
      <cube-scroll
        ref="scroll"
        class="horizontal-scroll-list-wrap"
        style="z-index:100;"
      >
        <cube-form :model="model">
          <cube-form-group>
            <cube-form-item v-for="(item,key) in fields" :key="key" :field="item" class="formfontstyle" :class="item.class"></cube-form-item>
          </cube-form-group>
          <div class="buttondiv">
            <button @click="finsh()">{{ fields[fields.length-1].buttonname }}</button>
          </div>
        </cube-form>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import visibilityMixin from "@/common/mixins/visibility"
import headtitle from "../headTitle/headTitle";  // eslint-disable-line 
import testinput from "@/components/form/testinput/test"     // eslint-disable-line 
import Progress from "../progress" // eslint-disable-line 
var moment = require("moment"); // 时间组件

// 公共form表单组件 接收2个参数 model 和 fields  代表 model的表单提交内容 代表 fields的 具体内容  提交成功后回调一个函数 并返回需要提交的表单
export default {
  components: {
    // headtitle,
    Progress, // eslint-disable-line 
  },
  mixins: [visibilityMixin],
  props: {
    model: {
      type: Object,
      default () {
        return {
          disposaltime: "",
          disposalobeject: "",
          describe: "",
          uploadValue: [],
          textareaValue: "",
          note: "",
          test: ""
        }
      }
    },
    routerFrom: {
      type: String,
      default: "/"
    },
    // 最后一个数据为 表头名字 和按钮名字
    fields: {
      type: Array,
      default() {
        return [
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

    }
  },
  data() {
    return {
      validity: {},
      isVisible: true,
      valid: undefined
    }
  },
  created() {

  },
  mounted() {
    this.longheights()
  },
  methods: {
    finsh() {
      this.showToastTime()
    },
    // 提示完成框 并回到页面
    showToastTime() {
      const toast = this.$createToast({
        type: "correct",
        time: 1700,
        txt: "提交成功",
        onTimeout: () => {
          this.$router.replace(this.routerFrom)
          this.$emit("submitSuccess", this.model)
        }
      })
      toast.show()
    },

    longheights() {
      // 为了适配 不同屏幕 获取屏幕大小取78%的高 滚动显示
      const stillheight = window.screen.height * (0.9) + "px"
      // console.log(stillheight)
      this.$refs.coimheight.style.height = stillheight
      // console.log(this.$refs.coimheight.style.height, this.$parent.$refs.tabslist, stillheight)
      // console.log(this.$parent, this.$parent.$refs.tabslist.style.display, moment().format("YYYY-MM-DD hh:mm"))
      const newtime = moment().format("YYYY-MM-DD hh:mm")
      this.model.disposaltime = newtime
      // moment(time).format("YYYY-MM-DD hh:mm")
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
  z-index: 140 !important;
  .cube-form{
    z-index: 140;
    height: 100%;
 .buttondiv{
   margin-top:40px;
button{

    outline:none;
    width:320.66px;
    height:46px;
    line-height: 46px;
    font-size: 16.66px;
    margin:0 20px;
    border-radius: 23.33px;
    color:#fff;
    background:linear-gradient(to left,#004EFF,#34AEFB);
    border: 0px;
  }
  }
}
}
</style>
