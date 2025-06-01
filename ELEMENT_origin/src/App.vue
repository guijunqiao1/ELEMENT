<template>
  <div id="app">
    <el-button autofocus type="primary">按钮</el-button>
    <el-button @click="handleClick" native-type="submit" type="primary">按钮</el-button>
  </div>
</template>

<!-- 补充：上述的template中的组件标签的名称既可以是组件实例中的组件匹配上的类名也可以是引入组件的自定义名称，同时前者命名的优先级大于后者 -->
<!-- 补充：上述直接传递plain以及round属性的实际含义为：:plain=true和:round=true  -->
<!-- 补充：上述需要注意的是在组件标签整体中的内容才会被放置在slot中 -->

<script setup lang="js" name="app">
import ElButton from "./components/element/button/src/button.vue";

//若子组件没有使用emit发射事件则仅定义普通按钮点击事件,直接点击不会触发事件，因为这是向组件整体进行绑定，但是若将@click修改为@click.native则能够监听到组价整体的盒子
//绑定上的事件了
function handleClick(e){
  console.log(e);
  // 需要注意此处和子组件中的emit发射过来的函数内容进行配合的流程为：
  //首先子组件中的根组件和当前组件绑定上了同一个事件，则在子组件中使用了emit进行内容的发射的内容可以在父组件中使用上,则此处成功获取到
  //传输流名称为clik的参数内容即value(也就是子组件中的$event)
}

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