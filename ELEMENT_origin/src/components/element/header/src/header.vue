<template>
  <div class="el-header" :style="{ height: instance.props.height }">
    <slot></slot>
  </div>
</template>

<script lang="js" setup name="ElHeader">
import {getCurrentInstance} from "vue";

defineProps({//生成代理，为template模板中的匹配上的属性自动添加上instance.props的前置索引--会提前检查是否有了这个索引
  height: {
    default: "60px",
    type: String
  }
})

const instance = getCurrentInstance();
// console.log("instance_really:"+instance.props.height===height);

</script>

<style lang="scss"></style>