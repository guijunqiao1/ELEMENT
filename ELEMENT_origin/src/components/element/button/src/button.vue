<template>
  <button>
    <slot></slot>
  </button>
</template>


<script setup lang='js' name="ElButton">
import { getCurrentInstance } from "vue";


defineProps({

})

//获取当前组件实例
const instance = getCurrentInstance();



</script>



<style>




</style>