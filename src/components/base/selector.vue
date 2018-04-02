<template>
    <div class="selector-wrap">
        <div class="selector-component" @click="tooglge">
            <span>{{chooseLabel}}</span>
            <div class="arrow"></div>
        </div>
        <div class="selector-board" v-if="isShow">
            <ul>
                <li v-for="select in selections" @click="choose(select)">{{select.label}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
   props:['selections'],
   data(){
       return {
           chooseLabel:'入门版',
           isShow:false
       }
   },
   methods:{
       tooglge(){
           this.isShow=!this.isShow
       },
       choose(item){
           this.chooseLabel=item.label;
           this.isShow=false;
           this.$emit('on-change',this.chooseLabel)
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selector-wrap{
    position:relative;
    display:inline-block;
}
.selector-component{
    border:1px solid #e3e3e3;
    padding:3px 5px;
    cursor: pointer;
}
.arrow{
    display:inline-block;
    width:0;
    height:0;
    border: 5px solid;
    vertical-align: middle;
    border-color: #e3e3e3 transparent transparent transparent;
    margin-top: 3px;
}
.selector-board{
    position:absolute;
    left:0;
    border:1px solid #e3e3e3;
    z-index:5;
    background:#fff;
}
.selector-board  ul li{
    padding:0 15px 0 5px;
    cursor: pointer;
}
.selector-board  ul li:hover{
    background: #e3e3e3;
}
</style>