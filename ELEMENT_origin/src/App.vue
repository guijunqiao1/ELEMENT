<template>
  <div id="app">
    <!-- 默认按钮 -->
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <br>
    <hr>
    <!-- 朴素按钮 -->
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>

    <br>
    <hr>
    <!-- 圆角按钮 -->
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>

    <br>
    <hr>
    <!-- 圆形按钮 -->
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>

    <br>
    <hr>
    <!-- 禁用按钮--默认 -->
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="success" disabled>成功按钮</el-button>
    <el-button type="info" disabled>信息按钮</el-button>
    <el-button type="warning" disabled>警告按钮</el-button>
    <el-button type="danger" disabled>危险按钮</el-button>

    <br>
    <hr>
    <!-- 禁用按钮--朴素 -->
    <el-button plain disabled>朴素按钮</el-button>
    <el-button type="primary" plain disabled>主要按钮</el-button>
    <el-button type="success" plain disabled>成功按钮</el-button>
    <el-button type="info" plain disabled>信息按钮</el-button>
    <el-button type="warning" plain disabled>警告按钮</el-button>
    <el-button type="danger" plain disabled>危险按钮</el-button>
  
    <br>
    <hr>
  </div>
</template>

<!-- 补充：上述的template中的组件标签的名称既可以是组件实例中的组件匹配上的类名也可以是引入组件的自定义名称，同时前者命名的优先级大于后者 -->
<!-- 补充：上述直接传递plain以及round属性的实际含义为：:plain=true和:round=true  -->

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