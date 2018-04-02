<template>
    <div class="counter-wrap">
        <div @click="minus">-</div>
        <input type="text" v-model="number">
        <div @click="add">+</div>
    </div>
</template>
<script>
export default {
   props:{
       min:{
           type:Number,
           default:1
       }
   },
   data(){
       return {
           number:this.min
       }
   },
   watch:{
       number(){
           this.$emit('',this.number)
       }
   },
   methods:{
       minus(){
           if(this.number>1)
           this.number--;
       },
       add(){
           this.number++;
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter-wrap{
    display:inline-block;
    vertical-align: middle;
}
.counter-wrap input{
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
    float:left;
}
.counter-wrap div{
    float:left;
    border:1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-wrap div:hover{
    background: #4fc08d;
    color: #fff;
    cursor: pointer;
}
</style>
