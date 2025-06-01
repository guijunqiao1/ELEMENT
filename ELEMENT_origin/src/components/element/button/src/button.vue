<template>
  <button :class="['el-button',type? `el-button--${type}`:'']">
    <slot></slot>
  </button>
</template>

<!-- 使用正则则class数组的书写元素中直接书写正则即可，而元素为对象的书写形式仅针对特殊语法--可以参考先前的复制类名的方式 -->

<script setup lang='js' name="ElButton">

  defineProps({
    type:{
      type:String
    }
  })

</script>



<style></style>