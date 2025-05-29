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
import { defineProps, getCurrentInstance } from 'vue';



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


console.log("parentname:" + parent.type.__name);//获取到了父组件名称
console.log("parent:");
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
  if (instance.props[size] && typeof instance.props[size] === "number") {
    classList.push(`el-col-${size}-${instance.props[size]}`);
  } else if (instance.props[size] && typeof instance.props[size] === "object") {
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
  }
})
console.log("this");
console.dir(window);
console.log("this.props:");
// console.dir(this.props);




</script>

<style scoped lang="scss">
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i/ 24 * 100%;
  }

  .el-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }

  .el-col-push-#{$i} {
    position: relative;
    left: $i/24 * 100%;
  }

  .el-col-pull-#{$i} {
    position: relative;
    right: $i/24 * 100%;
  }
}

.el-col {
  float: left;
  box-sizing: border-box;
}

//xs<768px
//仅当屏幕的时候进行媒体查询
@media only screen and (max-width:767px) {
  @for $i from 0 through 24 {

    //针对span取值为0的情况进行特殊处理
    .el-col-xs-0 {
      display: none;
    }

    .el-col-xs-#{$i} {
      width: $i/ 24 * 100%;
    }

    .el-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }

    .el-col-xs-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }

    .el-col-xs-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// //sm>=768px 
// //仅当屏幕的时候进行媒体查询
@media only screen and (min-width:768px) and (max-width:991px) {
  @for $i from 0 through 24 {

    //针对span取值为0的情况进行特殊处理
    .el-col-sm-0 {
      display: none;
    }

    .el-col-sm-#{$i} {
      width: $i/ 24 * 100%;
    }

    .el-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }

    .el-col-sm-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }

    .el-col-sm-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

//md>=992px
//仅当屏幕的时候进行媒体查询
@media only screen and (min-width:992px) and (max-width:1199px) {
  @for $i from 0 through 24 {

    //针对span取值为0的情况进行特殊处理
    .el-col-md-0 {
      display: none;
    }

    .el-col-md-#{$i} {
      width: $i/ 24 * 100%;
    }

    .el-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }

    .el-col-md-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }

    .el-col-md-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

//lg>=1200px
//仅当屏幕的时候进行媒体查询
@media only screen and (min-width:1200px) and (max-width:1919px) {
  @for $i from 0 through 24 {

    //针对span取值为0的情况进行特殊处理
    .el-col-lg-0 {
      display: none;
    }

    .el-col-lg-#{$i} {
      width: $i/ 24 * 100%;
    }

    .el-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }

    .el-col-lg-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }

    .el-col-lg-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

//xl>=1920px
//仅当屏幕的时候进行媒体查询
@media only screen and (min-width:1920px) {
  @for $i from 0 through 24 {

    //针对span取值为0的情况进行特殊处理
    .el-col-xl-0 {
      display: none;
    }

    .el-col-xl-#{$i} {
      width: $i/ 24 * 100%;
    }

    .el-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }

    .el-col-xl-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }

    .el-col-xl-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}
</style>

<!-- 上方书写sass环境下的循环语句,需要注意的是调用其中变量的方式:在类名中使用#{}进行包裹，在样式块中直接使用$i即可 -->
