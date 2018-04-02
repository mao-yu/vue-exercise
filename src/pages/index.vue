<template>
    <div class="container">
        <!-- 左边部分 -->
        <div class="left">
            <!-- 全部产品 -->
            <div class="All-product">
                <h3>全部产品</h3>
                <template v-for="item in ProList">
                    <h4>{{item.title}}</h4>
                    <ul>
                        <li v-for="items in item.list">
                            <a :href="items.url">{{items.name}}</a>
                            <span v-if="items.hot" class="hot">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!item.last" class="hr"></div>
                </template>
            </div>
            <!-- 最新消息 -->
            <div class="All-news">
                <h3>最新消息</h3>
                <ul>
                    <li v-for="item in NewList.list">
                        <a :href="item.url" :data-id="item.id">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 右边部分 -->
        <div class="right">
            <!-- 轮播 -->
            <div class="slider">
                <img src="../assets/slideShow/pic1.jpg" style="width:100%;">
            </div>
            <!-- 产品入口 -->
            <div class="product">
                <div class="index-board-item" :class="{'line-last':index%2!=0}" v-for="(item,index) in boardList.boardList">
                    <div class="index-board-list" :class="'index-board-'+item.id">
                        <h2>{{item.title}}</h2>
                        <p>{{item.description}}</p>
                        <div class="buy-btn">
                            <router-link :to="{path:'detail/'+item.toKey}" style="color:#fff;">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '../util/mock';
export default {
    data () {
        return {
            ProList:[],
            NewList:[],
            boardList:[]
        }
    },
    created(){
        this.$http.get('http://192.168.1.156:8080/api/getProsList')
        .then(function(result){
            this.ProList=result.body;
        })
        .catch(function(error){
            alert("出错");
        }),
        this.$http.get('http://192.168.1.156:8080/api/getNewsList')
        .then(function(result){
            this.NewList=result.body;
        })
        .catch(function(error){
            alert("出错");
        })
        this.$http.get('http://192.168.1.156:8080/api/getBuyList')
        .then(function(result){
            this.boardList=result.body;
            // console.log(result.body);
        })
        .catch(function(error){
            alert("出错");
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 左半部分 */
.left{
    width:270px;
    border:1px solid #ddd;
    text-align: left;
    box-shadow: 0 0 1px #ddd;
    float:left;
    background: #fff;
    margin-right: 20px;
}
.All-product h3,.All-news h3{
    background:#4FC08D;
    color:#fff;
    margin-bottom:20px;
    padding:10px 15px;
}
.All-product h4{
    padding:0 10px;
}
.All-product ul,.All-news ul{
    padding:15px;
}
.All-product ul li,.All-news ul li{
    font-size:14px;
    line-height: 20px;
    padding:5px;
}
.All-news{
    min-height:512px;
}
.hot{
    color:#fff;
    background: red;
}
.hr{
    height:1px;
    width:100%;
    background: #ddd;
    margin-bottom: 10px;
}
/* 右半部分 */
.right{
    width:75%;
    float:left;   
}
.product{
    overflow: hidden;
    margin-top:5px;
}
.index-board-list{
    padding:20px;
    text-align: left;
    padding-left:120px;
}
.index-board-list p{
    font-size:14px;
}
.index-board-list h2{
    margin-bottom:15px;
    font-size: 18px;
}
.index-board-item{
    float:left;
    width:45%;
    box-shadow: 0 0 1px #ddd;
    margin:0 20px 20px 0;
    width:400px;
    padding:20px;
    background: #fff;
}
.line-last{
    margin-right:0;
}
.buy-btn{
    display:inline-block;
    width:80px;
    height:15px;
    text-align: center;
    line-height:15px;
    background:#4FC08D;
    margin-top: 20px;
    padding:10px;
    cursor: pointer;
}
.index-board-car{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill{
  background: url(../assets/images/4.png) no-repeat;
}
</style>
