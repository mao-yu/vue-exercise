//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
// Mock.mock('http://192.168.1.156:8080/api/userLog', (req, res) => {
//     return {
//         response:{
//             text: '注册成功',
//             status: 1  
//         }
//     }
// });
Mock.mock('http://192.168.1.156:8080/api/getProsList', (req, res) => {
    return {
        pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
        },
        app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
        }
    }
});
Mock.mock('http://192.168.1.156:8080/api/getNewsList', (req, res) => {
    return {
        list:[
            {
                id:1,
                title:'新闻1',
                url:'http://starcraft.com'
            },
            {
                id:1,
                title:'新闻2',
                url:'http://starcraft.com'
            },
            {
                id:1,
                title:'新闻3',
                url:'http://starcraft.com'
            },
            {
                id:1,
                title:'新闻4',
                url:'http://starcraft.com'
            },{
                id:1,
                title:'新闻5',
                url:'http://starcraft.com'
            }
        ]
    }
});
Mock.mock('http://192.168.1.156:8080/api/getBuyList', (req, res) => {
    return {
        boardList: [
            {
              title: '开放产品',
              description: '开放产品是一款开放产品',
              id: 'car',
              toKey: 'analysis',
              saleout: false
            },
            {
              title: '品牌营销',
              description: '品牌营销帮助你的产品更好地找到定位',
              id: 'earth',
              toKey: 'count',
              saleout: false
            },
            {
              title: '使命必达',
              description: '使命必达快速迭代永远保持最前端的速度',
              id: 'loud',
              toKey: 'forecast',
              saleout: true
            },
            {
              title: '勇攀高峰',
              description: '帮你勇闯高峰，到达事业的顶峰',
              id: 'hill',
              toKey: 'publish',
              saleout: false
            }
        ]
    }
});