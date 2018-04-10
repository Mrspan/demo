import Mock from 'mockjs';
const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'foods|10-50': [{
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }],
  "sales|10-50": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-100.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-100": 1
  }],
  "regist|1":[{
    "status":true,
    "msg":"注册成功",
  }],
  "login|1":[{
    "status|1":true,
  }],
  'list|10': [{
    'name': "@ctitle(2,10)",
    "img": "@image('100x100',@color)",
  }],
  "info|1":[{
    'name': "@ctitle(2,10)",
    'name1|1-3':'abc',
    'name2|3':"bg",
    'name3|1-100':1,
    'name4|+1':0,
    "list":"@csentence()",    
    'time':"@time",
    "tel|0-9":11
  }]
});
export default {
  data
}