<template>
  <div class="el-footer" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script lang="js" setup name="ElFooter">

defineProps({
  height: {
    default: "60px",
    type: String
  }
})


</script>

<style lang="scss"></style>