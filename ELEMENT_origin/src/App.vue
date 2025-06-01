<template>
  <div id="app">
    <el-link>主要链接</el-link>
  </div>
</template>

<!-- 补充：上述的template中的组件标签的名称既可以是组件实例中的组件匹配上的类名也可以是引入组件的自定义名称，同时前者命名的优先级大于后者 -->
<!-- 补充：上述直接传递plain以及round属性的实际含义为：:plain=true和:round=true  -->
<!-- 补充：上述需要注意的是在组件标签整体中的内容才会被放置在slot中 -->

<script setup lang="js" name="app">
import ElLink from "./components/element/link/src/link.vue";


</script>


<style lang="css">
.el-header,
.el-footer {
  text-align: center;
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>