<template>
  <div :class='["el-container", { "is-vertical": isVertical }]'>
    <slot></slot>
  </div>
</template>

<script lang="js" setup name="ElContainer">
import { getCurrentInstance } from 'vue';

defineProps({
  direction: {
    type: String,
    validator: function (value) {
      return ["horizontal", "vertical"].includes(value);
    }
  }
});

//获取当前组件实例
const instance = getCurrentInstance();

//初始化计算属性
let isVertical;
if (instance.props.direction === "vertical") {
  isVertical = true;
} else if (instance.props.direction === "horizontal") {
  isVertical = false;
} else {
  isVertical = instance.slots.default().some(vNode => {
    const type = vNode.type;
    return ((typeof type === "object") && (type.__name === "header" || type.__name === "footer"));
  })
}
// if (instance.slots && instance.slots.default().length > 0) {//当默认插槽中存在内容的时候
//   //遍历插槽内容同时判断是否存在相应的“子组件”（注意不是不是普通的子元素）如果是则添加类名
//   return instance.slots.default().some(vNode => {//该方法为数组原型中检查数组中是否存在某个元素的方法
//     //获取标志位
//     const sign = typeof vNode.type;
//     if (sign === "object") {//组件元素
//       return true;
//     }
//   })
// }
// else {
//   return false;
// }

console.log(instance.slots.default()[0].type.__name);
console.dir(instance.slots.default());


</script>

<style lang="scss"></style>