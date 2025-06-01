<template>
  <a
    :class="['el-link',type ? `el-link--${type}` : '',(underline && !disabled) ? 'is-underline': '',disabled ?'is-disabled' : '' ,]"
    :href="href"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="instance.slots.default">
      <slot></slot>
    </span>
  </a>
</template>


<script setup lang="js" name="ElLink">
import {getCurrentInstance} from "vue";

defineProps({
  type:{
    type:String
  },
  disabled:{
    type:Boolean
  },
  underline:{
    type:Boolean
  },
  href:{
    type:String
  },
  icon:{
    type:String
  }
})

//获取当前组件实例
const instance = getCurrentInstance();


</script>

<style lang="scss"></style>