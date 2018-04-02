<template>
    <div class="shade">
        <!-- 遮罩层 -->
        <div class="dialog" v-if="isShow" @click="closeMyself"></div>
        <transition name="drop">
            <div class="window" v-if="isShow">
                <slot>empty</slot>
                <div class="close" @click="closeMyself">x</div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props:['isShow'],
    methods:{
        closeMyself(){
            this.$emit('on-close')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
  transform: translateY(-500px);
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave {
  transform: translateY(0px);
}
.shade{
    position:fixed;
    width:100%;
    height:100%;
}
.dialog{
    position:fixed;
    background-color:#000;
    opacity: 0.5;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:5;
}
.window{
    position:fixed;
    border:2px solid #000;
    top:30%;
    left:25%;
    width:50%;
    background:#fff;
    color:#000;
    z-index:10;
    padding:3%;
}
.close{
    position:absolute;
    right: 1%;
    top: 1%;
    font-size: 20px;
    cursor: pointer;
}
.close:hover{
    color:green;
}
</style>
