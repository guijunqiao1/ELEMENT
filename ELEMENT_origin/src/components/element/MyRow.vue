<template>
  <component :is="renderModel">
    <slot>1</slot>
  </component>
</template>



<!-- 需要注意的是使用模板类名的方式进行赋值的时候若使用数组的形式进行赋值，则对于该元素使用的类名则实际为数组中的每个元素的取值(正常情
况下需要满足元素为字符串的对齐要求)，同时当数组中的元素取值为对象的时候，则该元素类名取值为该属性名（需要属性值为true的情况）-->



<!-- 回顾slot插槽标签的大体的概念：
本身的作用是当自身作为组件模块被父元素引入并使用的时候，在使用的内容中若出现了：使用当前的组件模块同时向可以和当前组件模块中的slot标签
进行契合的部分进行内容的填充的时候，则将匹配上的内容补充到“每个”slot标签的位置，若父元素在其中填充的内容的地方无slot与其对应
则在最终渲染的内容中同样不存在填充的；同时需要注意的是引入的组件模块的在使用的时候可以是自定义的模块名也可以是模块中具体的类标签；需要
注意的是在slot中书写的文本在最终呈现内容的时候会被自动清除 -->

<script setup lang="js" name="MyRow">
import { getCurrentInstance, h, render, useSlots } from 'vue';

//调用和vue2中props配置项等价的接收父组件传参的方法--该方法定义的props参数挂载到组件实例上和直接在外部传参等价
defineProps({
  gutter: {
    default: 0,//控制默认值
    type: Number
  },
  type: {
    type: String
  },
  justify: {
    default: "start",
    type: String,
    validator(value) {
      // 验证 justify 的值是否在数组范围中取值
      return ["start", "end", "center", "space-between", "space-around", "space-evenly"].includes(value);
    }
  },
  align: {
    default: "top",
    type: String,
    validator(value) {
      // 验证 align 的值是否在数组范围中取值
      return ["top", "middle", "bottom"].includes(value);
    }
  },
  tag: {
    default: "div",
    type: String
  }
});

//控制row向外侧靠齐
const instance = getCurrentInstance();//调用内置方法用于获取当前组件本身的实例
let gutter = instance.props.gutter;
const style = {};
style.marginLeft = -gutter / 2 + "px";
style.marginRight = style.marginLeft;

// console.log("插槽：子元素：");
// console.dir(instance);
// console.dir(instance.slots.default);

//定义模板变量，存储虚拟dom渲染的内容

// console.log("是否取等？" + (instance.props.justify === instance.props["justify"]));
// console.log("前者：" + instance.props.justify);
// console.log("后者：" + instance.props["justify"]);

// console.log("type:" + instance.props.type);
// console.log("justify:" + instance.props.justify);
// console.log("align:" + instance.props.align);

const renderModel = h(instance.props["tag"], {
  class: ['el-row', instance.props["type"] === 'flex' && "el-row--flex",
    ((instance.props['justify'] !== 'start') && `is-justify-${instance.props['justify']}`),
    ((instance.props['align'] !== 'top') && `is-align-${instance.props['align']}`)],
  style: style
});


// 上述需要注意的是对于对象的索引方式.和[]：
// 前者不要求.后的属性名为已知的变量，而[]则要求[]内为已知的内容同时可以直接使用字面量的形式进行取值,同时需要注意的是就算是字面量的形式也要求是字符串

</script>

<style lang="scss"></style>