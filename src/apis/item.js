import http from "@/utils/http"
var Mock = require("mockjs")
var data1 = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+2": 10111
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/list", {
  "list|1-10": [{
  // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+2": 10111,
    "type|1": ["交通执法", "指挥调度", "专项整治"],
    "describe|1": ["江南大道江虹路北汽车刮蹭事故", "洙泗路龙坞隧道堵车事件", "西溪北苑远光灯整治"],
    "time|1": ["2020年4月7日 14:45:55", "2020年4月7日 15:08:34", "专项整治"],
    "from|1": ["警务系统", "上报平台", "专线电话"],
    "state|1": ["未处理", "已处理", "已完成"],
    "place|1": ["[120.3, 29.9]", "[120.45, 30.2]", "[120.45, 30.23]"]
  }]
}
)

//  [{
//   id:'10011',
//   type:'交通执法',
//   describe:'江南大道江虹路北汽车刮蹭事故',
//   time:'2020年4月7日 14:45:55',
//   form: '警务系统',
//   state: '未处理',
//   place: [120.45, 30],
//  },
//  {
//   id:'10012',
//   type:'指挥调度',
//   describe:'洙泗路龙坞隧道堵车事件',
//   time:'2020年4月7日 14:45:55',
//   form: '警务系统',
//   state: '已处理',
//   place: [120.45, 30],
//  },
//  {
//   id:'10013',
//   type:'专项整治',
//   describe:'西溪北苑远光灯整治',
//   time:'2020年4月7日 14:45:55',
//   form: '警务系统',
//   state: '已完成',
//   place: [120.45, 30],
//  }
//  ]

// 输出结果
// 数据列表
export function getItemList(params) {
  return http({
    url: "/api/item/list",
    method: "get",
    data1
  })
}
// 事项新增
export function addItem(data) {
  return http({
    url: "/api/item/add",
    method: "post",
    data
  })
}
// 事项修改
export function updateItem(data) {
  return http({
    url: "/api/item/update",
    method: "post",
    data
  })
}
// 事项删除
export function deleteItem(params) {
  return http({
    url: "/api/item/delete",
    method: "get",
    params
  })
}
// 事项发布
export function releaseItem(data) {
  return http({
    url: "/api/item/release",
    method: "post",
    data
  })
}
