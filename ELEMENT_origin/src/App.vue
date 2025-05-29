<template>
  <div id="app">
    <!-- 基础布局 -->
    <h1>基础布局</h1>
    <el-row tag="h2">
      <el-col :span="24">
        <div class="grid-content ep-bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
    </el-row>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 分栏间隔 -->
    <h1>分栏间隔</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 混合布局 -->
    <h1>混合布局</h1>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 列偏移 -->
    <h1>列偏移</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :push="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6" :push="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>


    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 对齐方式 -->
    <h1>对齐方式</h1>
    <el-row class="row-bg" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="center" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="end" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="space-between" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="space-around" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg" justify="space-evenly" type="flex">
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 响应式布局 -->
    <h1>响应式布局</h1>
    <el-row :gutter="10">
      <el-col :xs="{ span: 4, offset: 5 }" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple-light"></div>
      </el-col>
    </el-row>

    <br>
    <br>
    <br>
    <br>
    <br>

    <!-- 基于断点的隐藏类 -->
    <h1>基于断点的隐藏类</h1>
    <el-row :gutter="10">
      <el-col class="hidden-xs-only" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="js" name="app">
import ElRow from "./components/element/MyRow.vue";
import ElCol from "./components/element/MyCol.vue";
//需要注意的是使用的可以是引入的名称同时也可以是引入的组件整体中的template中存在的el-row标签的整体中的内容，本质利用的插槽的原理







</script>



<style lang="scss">
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.ep-bg-purple-dark {
  background-color: gray;
}

.ep-bg-purple {
  background-color: skyblue;
}

.ep-bg-purple-light {
  background: green;
}


</style>
