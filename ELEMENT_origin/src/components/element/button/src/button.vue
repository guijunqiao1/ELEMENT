<template>
  <button :class="['el-button',type? `el-button--${type}`:'',size?`el-button--${size}`:'', plain ? 'is-plain' : '',round ? 'is-round':'',circle?'is-circle':'',disabled?'is-disabled':'']"
    :autofocus="autofocus"
    :type="nativeType"
    @click="sendToParent($event)"
    >
    <!--  补充：defineEmits 就是告诉编译器“这个组件会发出哪些自定义事件”，然后它会返回一个 emit 函数，调用时把事件名和参数传给父组件。 -->
    <!--  父组件同样用 <Child @click="handler" /> 来监听。 -->
    <i :class="[icon?icon:'']" v-if="icon&&!loading"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <!-- <slot></slot> -->
     <!-- 此处使用span标签进行包裹，使得icon能够和嵌入的内容进行盒子分隔 -->
    <span v-if="instance.slots.default">
      <!-- 此处判断的条件是实例中是否得到从父组件中获取的嵌入插槽slot的内容作为条件 -->
      <slot></slot>
    </span>
  </button>
</template>

<!-- 上述需要注意的是由于需要防止icon图标本身的内容和buttond样式内容进行区分，故需要固定上组件的子元素为i同时确保icon对应的类名赋值到i上 -->

<!-- 使用正则则class数组的书写元素中直接书写正则即可，而元素为对象的书写形式仅针对特殊语法--可以参考先前的复制类名的方式 -->

<script setup lang='js' name="ElButton">
import {getCurrentInstance} from "vue";

  defineProps({
    type:{
      type:String
    },
    plain:{
      type:Boolean
    },
    round:{
      type:Boolean
    },
    circle:{
      type:Boolean
    },
    icon:{
      type:String
    },
    disabled:{
      type:Boolean
    },
    loading:{
      type:Boolean
    },
    size:{
      type:String
    },
    autofocus:{
      type:Boolean
    },
    nativeType:{
      type:String
    }
  })

  //获取到emit方法实例
  const emit = defineEmits(['clik']);//注册传递的函数名为clik

  //定义传递到父组件载体的函数
  function sendToParent(value){
    emit("clik",{ param:value });//传递具体注册的函数以及对应的参数
  }

  const instance = getCurrentInstance();


</script>



<style></style>