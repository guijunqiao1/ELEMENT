<template>
  <div id="app">
    <!-- 文字按钮 -->
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-button type="primary"><i class="el-icon-upload el-icon--left"></i>上传</el-button>
    <el-button type="primary" :loading="true">加载中</el-button>

    <br>
    <hr>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>

    <br>
    <hr>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>

    <br>
    <hr>
      <el-button type="primary" icon="el-icon-edit" circle ></el-button>
      <el-button type="success" icon="el-icon-check" circle size="medium"></el-button>
      <el-button type="info" icon="el-icon-message" circle size="small"></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle size="mini"></el-button>

    <br>
    <hr>

  </div>
</template>

<!-- 补充：上述的template中的组件标签的名称既可以是组件实例中的组件匹配上的类名也可以是引入组件的自定义名称，同时前者命名的优先级大于后者 -->
<!-- 补充：上述直接传递plain以及round属性的实际含义为：:plain=true和:round=true  -->
<!-- 补充：上述需要注意的是在组件标签整体中的内容才会被放置在slot中 -->

<script setup lang="js" name="app">
import ElButton from "./components/element/button/src/button.vue";


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