<template>
<div class="container">
  <!-- 导航条 -->
  <div class="nav_container">
    <div class="nav">
      <div class="img_contain">
        <router-link to="/"><img src="../assets/logo.png" style="width:100%;"></router-link>
      </div>
      <ul>
        <li>{{username}}</li>
        <li v-if="username===''" @click="logClick">登录</li>
        <li>|</li>
        <li v-if="username===''" @click="regClick">注册</li>
        <li v-if="username!==''" @click="closeClick">退出</li>
        <li>|</li>
        <li @click="aboutClick">关于</li>  
      </ul>  
    </div>
  </div>
  <!-- 底下部分 -->
  <div class="main_container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <!-- footer -->
  <div class="app-foot">
      <p>© 2016 fishenal MIT</p>
    </div>
  <!-- 登录框 -->
  <Dialog :isShow="isShowLogDialog" @on-close="closeAll('isShowLogDialog')">
    <LogForm @has-log="successLog"></LogForm>
  </Dialog>
  <!-- 注册框 -->
  <Dialog :isShow="isShowRegDialog" @on-close="closeAll('isShowRegDialog')">
    <RegForm></RegForm>
  </Dialog>
  <!-- 关于 -->
  <Dialog :isShow="isShowAboutDialog" @on-close="closeAll('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
  </Dialog>
</div>
</template>
<script>
import Dialog from './base/dialog'
import RegForm from './RegForm'
import LogForm from './LogForm'
export default {
  components:{
    Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      username:'',
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false
    }
  },
  methods:{
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeAll(attr){
      this[attr]=false;
    },
    closeClick(){
      this.username = ''
    },
    successLog(val){
      this.username=val;
      this.closeAll ('isShowLogDialog')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height:100%;
}
.nav_container{
  width:100%;
  background-color: #363636;
  height:70px;
}
.nav,.main_container{
  width:1200px;
  margin:0 auto;
}
.main_container{
  overflow: hidden;
}
.img_contain{
  float:left;
  width:5%;
  overflow: hidden;
  margin-top: 8px;
}
.nav ul{
  float:right;
  line-height:70px;
}
.nav ul li{
  float:left;
  color:#fff;
  margin:5px;
  cursor: pointer;
}
.nav ul li:hover{
  color:green;
}
.main_container{
  margin-top:25px;
  height:100%;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
</style>
