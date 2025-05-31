<template>
  <div class="el-aside" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script lang="js" setup name="Aside">

defineProps({
  width: {
    type: String,
    default: "300px"
  }
})

</script>

<style lang="scss"></style>