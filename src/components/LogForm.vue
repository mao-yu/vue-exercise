<template>
    <div class="log-form">
        <p>
            <span>用户名：</span>
            <input type="text" v-model="username" placeholder="请输入用户名">
            <span></span>    
        </p>
        <p>
            <span>密码：</span>
            <input type="password" v-model="password" placeholder="请输入密码">
            <span></span>
        </p>
        <div>{{errorTest}}</div>    
        <div class="log-btn" @click="register">登录</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           username:'',
           password:'',
           errorTest:''
        }
    },
    methods:{
        register(){
            if(this.username==''||this.password==''){
                this.errorTest="部分选项未通过"
            }else{
                this.$emit('has-log', this.username)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-form{
    text-align: left;
}
.log-form p{
    margin:3% 0;
}
.log-form span{
    display:inline-block;
    width:10%;
}
.log-btn{
    text-align:center;
    background:green;
    width:10%;
    color:#fff;
    height:5%;
    padding:1%;
    cursor: pointer;
}
</style>
