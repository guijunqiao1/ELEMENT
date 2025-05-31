<template>
  <i :class="['el-icon','el-icon-'+instance.props.name]"></i>
</template>


<script setup lang='js' name="ElIcon">
import { getCurrentInstance } from "vue";


defineProps({
  name:{
    type:String
  }
})

//获取当前组件实例
const instance = getCurrentInstance();

console.log("123");


</script>



<style>




</style>