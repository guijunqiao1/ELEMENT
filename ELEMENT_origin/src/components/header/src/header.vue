<template>
  <div class="el-header" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script lang="js" setup name="ElHeader">

defineProps({
  height: {
    default: "60px",
    type: String
  }
})

</script>

<style lang="scss"></style>