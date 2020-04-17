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
  "list|2-10": [{
  // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+2": 10111,
    "type|1": ["交通执法", "指挥调度", "专项整治"],
    "describe|1": ["江南大道江虹路北汽车刮蹭事故", "洙泗路龙坞隧道堵车事件", "西溪北苑远光灯整治"],
    "time|1": ["2020年4月7日 14:45:55", "2020年4月7日 15:08:34"],
    "from|1": ["警务系统", "上报平台", "专线电话"],
    "state|1": ["未处理", "已处理", "已完成"],
    "place|1": [[120.3, 29.9], [120.45, 30.2], [120.45, 30.23]]
  }]
}
)
Mock.mock("http://r740.youlishu.com:8888/api/item/task", {
  "task|1": [{
    "name": "警卫任务",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "保障时间", content: "", type: "timePicker" },
    "information": { name: "方案信息", content: "", type: "input" },
    "road": { name: "保障路段", content: "", type: "input" },
    "video": { name: "卡口视频", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/traffic", {
  "traffic|1": [{
    "name": "交通执法",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "处置时间", content: "", type: "timePicker" },
    "person": { name: "处置对象", content: "", type: "input" },
    "result": { name: "处置认定", content: "", type: "input" },
    "photo": { name: "拍照取证", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/command", {
  "command|1": [{
    "name": "指挥调度",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "处置时间", content: "", type: "timePicker" },
    "person": { name: "处置对象", content: "", type: "input" },
    "describe": { name: "事件描述", content: "", type: "input" },
    "feedback": { name: "处置反馈", content: "", type: "input" },
    "photo": { name: "拍照取证", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/lurkingPeril", {
  "lurkingPeril|1": [{
    "name": "隐患排查",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "排查时间", content: "", type: "timePicker" },
    "person": { name: "排查对象", content: "", type: "input" },
    "describe": { name: "隐患评估", content: "", type: "input" },
    "photo": { name: "现场照片", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/educate", {
  "educate|1": [{
    "name": "宣传教育",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "教育时间", content: "", type: "timePicker" },
    "person": { name: "教育对象", content: "", type: "input" },
    "describe": { name: "教育内容", content: "", type: "input" },
    "photo": { name: "现场照片", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/collect", {
  "collect|1": [{
    "name": "信息采集",
    "content|1": ["江南大道江虹路北汽车刮蹭事故", "滨盛路江汉路交叉口北向南拥堵", "江南大道与西兴路交叉口南北流向临时封闭"],
    "speedOfProgress|1": ["未处理", "处置中", "已处理"],
    "time": { name: "采集时间", content: "", type: "timePicker" },
    "person": { name: "采集对象", content: "", type: "input" },
    "describe": { name: "采集内容", content: "", type: "input" },
    "photo": { name: "现场照片", content: "" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/report", {
  "report|1": [{
    "name": "突发上报",
    "position": { name: "地点定位", position: [120.1740, 30.2593] },
    "time": { name: "上报时间", content: "", type: "timePicker" },
    "type": { name: "事件类型", content: ["警卫任务", "交通执法", "指挥调度", "隐患排查", "宣传教育", "信息采集"], type: "select" },
    "describe": { name: "事件描述", content: "", type: "input" },
    "photo": { name: "现场照片", content: "" },
    "remarks": { name: "备注", content: "", type: "textarea" }
  }]
})
Mock.mock("http://r740.youlishu.com:8888/api/item/renovation", {
  "renovation|1": [{
    "name": "专项整治",
    "speedOfProgress|1": ["20：00", "20：55", "22：00"],
    "time": { name: "处置时间", content: "", type: "timePicker" },
    "person": { name: "处置对象", content: "", type: "input" },
    "describe": { name: "事件描述", content: "", type: "input" },
    "result": { name: "处置认定", type: "input" },
    "photo": { name: "拍照取证", content: "" },
    "remarks": { name: "备注", content: "", type: "textarea" }
  }]
})

//  [{
//   id:'10011',
//   type:'交通执法,
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
// 警卫任务接口
export function getItemTask(params) {
  return http({
    url: "/api/item/task",
    method: "get",
    data1
  })
}
// 交通执法接口
export function getItemTraffic(params) {
  return http({
    url: "/api/item/traffic",
    method: "get",
    data1
  })
}
// 指挥调度接口
export function getItemCommand(params) {
  return http({
    url: "/api/item/command",
    method: "get",
    data1
  })
}
// 隐患排查接口
export function getItemLurkingPeril(params) {
  return http({
    url: "/api/item/lurkingPeril",
    method: "get",
    data1
  })
}
// 宣传教育接口
export function getItemEducate(params) {
  return http({
    url: "/api/item/educate",
    method: "get",
    data1
  })
}
// 信息采集接口
export function getItemCollect(params) {
  return http({
    url: "/api/item/collect",
    method: "get",
    data1
  })
}
// 突发上报接口
export function getItemReport(params) {
  return http({
    url: "/api/item/report",
    method: "get",
    data1
  })
}
// 专项整治接口
export function getItemRenovation(params) {
  return http({
    url: "/api/item/renovation",
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
