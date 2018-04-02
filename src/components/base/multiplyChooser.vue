<template>
    <div class="chooser-wrap">
        <span v-for="(select,index) in selections" 
        @click="choose(index)" 
        :class="{active:checkActive(index)}">{{select.label}}</span>
    </div>
</template>
<script>
export default {
   props:['selections'],
   data(){
       return {
         nowIndexes:[0]
       }
   },
   methods:{
       choose(index){
           if(this.nowIndexes.indexOf(index)===-1){
               this.nowIndexes.push(index)
           }else{
               this.nowIndexes=this.nowIndexes.filter(item=>{
                   return item!==index
               })
           }
           let nowObjArray=
           this.$emit('on-change',nowObjArray)
       },
        checkActive(index){
            return this.nowIndexes.indexOf(index)!==-1
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