<template>
    <div class="chooser-wrap">
        <span v-for="(select,index) in selections" 
        @click="choose(index)" 
        :class="{active:nowindex===index}">{{select.label}}</span>
    </div>
</template>
<script>
export default {
   props:['selections'],
   data(){
       return {
         nowindex:0
       }
   },
   methods:{
       choose(index){
           this.nowindex=index;
           this.$emit('on-change',this.selections[nowindex]) 
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-wrap{
    position:relative;
    display: inline-block;
}
.chooser-wrap span{
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding:5px 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 3px;
}
.active{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>