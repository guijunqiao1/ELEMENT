<template>
  <div :style="style" :class="[`el-col`, ...classList]">
    <!-- 需要注意的是style内联属性赋值在非字符串情况下则必须为对象或者强制字符串的形式，字符串的情况下可以不使用对象的形式 -->
    <slot></slot>
  </div>
</template>

<!-- 需要注意的是上述的类名的书写的形式的演化： -->
<!-- <div class="el-col el-col-ol"></div>
==>
<div :class="el-col el-col-ol"></div>--非法
==>
<div :class="'el-col' 'el-col-ol'"></div>--非法
==>
<div :class="`'el-col' 'el-col-ol'`"></div>
==>
<div :class="['el-col','el-col-ol']"></div> -->

<!-- 补充：需要注意的是针对""包裹住的``之中的内容无法使用模板字符串 -->

<script setup lang="js" name="MyCol">
import { getCurrentInstance } from 'vue';



const instance = getCurrentInstance();//调用内置方法用于获取当前组件本身的实例
let parent = instance.parent;//定义存储父组件的变量
while (parent && parent.type.__name !== "MyRow") {
  parent = parent.parent;
}

let gutter = parent.props.gutter;//获取到父组件中的gutter变量

const style = {};

if (gutter) {
  style.paddingLeft = gutter / 2 + "px";
  style.paddingRight = style.paddingLeft;
}


// console.log("parentname:" + parent.type.__name);//获取到了父组件名称
// console.log("parent:");
console.dir(parent);



// 调用和vue2中props配置项等价的接收父组件传参的方法
// 需要注意此处声明的方法得到的变量是直接存在于当前作用域中直接就能使用，而和上下文中提到的instance.props[参数名]的中的值又不同，
//其为实际在组件身上传递的参数，一定要区分双方的区别
defineProps({
  span: {
    default: 24,//控制默认值
    type: Number
  },
  offset: {
    default: 0,//控制默认值
    type: Number
  },
  push: {
    default: 0,
    type: Number
  },
  pull: {
    default: 0,
    type: Number
  },
  xs: {
    default: 0,
    type: Number
  },
  sm: {
    default: 0,
    type: Number
  },
  md: {
    default: 0,
    type: Number
  },
  lg: {
    default: 0,
    type: Number
  },
  xl: {
    default: 0,
    type: Number
  },
  // tag: {
  //   default: "div",
  //   type: String
  // }
});



//定义存储类名的变量，防止直接进行类名的赋值使得在defineProps中的原先未传递的变量同样存在了默认值进而传递给了当前变量的类名
const classList = [];
["span", "offset", "push", "pull"].forEach((item) => {//对组件传参进行可能遍历
  // console.log("instance：");
  // console.dir(instance);
  // console.log(instance.props["span"]);
  if (instance.props[item]) {
    classList.push(
      item === "span" ?
        `el-col-${instance.props[item]}` :
        `el-col-${item}-${instance.props[item]}`
    )
  }
});
["xs", "md", "sm", "lg", "xl"].forEach((size) => {
  if (instance.props[size] && (typeof instance.props[size] === "number")) {
    classList.push(`el-col-${size}-${instance.props[size]}`);
  } else if (instance.props[size] && (typeof instance.props[size] === "object")) {
    // {
    //   span:6,
    //   offset:8,
    //   push:7,
    //   pull:9
    // }
    // el-col-xs-6
    // el-col-xs-offset-8
    // el-col-xs-push-7
    // el-col-xs-pull-9
    const prop = instance.props[size];
    Object.keys(prop).forEach((item) => {
      classList.push(
        prop === "span" ? `el-col-${size}-${prop[item]}` : `el-col-${size}-${item}-${prop[item]}`
      )
    })
  } else {
    console.log("col中存在着没传值的情况，且被检测");
    console.log("instance.props[size]:" + instance.props[size]);
    console.log("typeof instance.props[size] === 'number':" + (typeof instance.props[size] === "number"));
    console.log("boolean:" + (instance.props[size] && (typeof instance.props[size] === "number")));
    console.log("实际props对象");
    console.dir(instance.props);
  }
})
// console.log("this");
// console.dir(window);
// console.log("this.props:");
// console.dir(this.props);




</script>

<style lang="scss"></style>

<!-- 上方书写sass环境下的循环语句,需要注意的是调用其中变量的方式:在类名中使用#{}进行包裹，在样式块中直接使用$i即可 -->
