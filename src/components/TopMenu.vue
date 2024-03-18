<template>
  <input id="menuCtrl" type="checkbox" class="absolute -top-full">
  <div class="w-5/6 h-16 flex flex-wrap p-1 justify-between items-center mx-auto">
    <h1 class="text-left text-4xl w-2/5 md:w-1/5 pt-1">HOTEL</h1>
    <div class="w-2/5 sm:1/3 md:w-1/6 text-center border border-gray-500/40 my-6 rounded-full text-sm leading-8 md:order-2 hover:text-orange-200">SIGN UP</div>
    <label for="menuCtrl" class="cursor-pointer w-10 h-10 flex items-center">
      <SvgIcon name="button_menu" class="w-9 h-9 hover:w-10 hover:h-10 md:hidden" color="white" />
    </label>
    <ul class="absolute md:static -top-full z-10 flex flex-wrap md:flex-nowrap justify-center items-center px-0 md:px-5 w-4/5 md:w-1/2 md:order-1 rounded-xl bg-slate-600 md:bg-transparent">
        <li class="text-center w-full md:w-[20%] py-5 md:py-0 cursor-pointer hover:text-orange-200" v-for="value in menu" :key="value">{{value.title}}</li>
    </ul>
  </div>
</template>

<script setup>
import SvgIcon from './SvgIcon.vue';
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const menu = reactive([
  {title:"About",link:"#"},
  {title:"Service",link:"#"},
  {title:"Rooms",link:"#"},
  {title:"Blog",link:"#"},
  {title:"Contact",link:"#"},
])
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
})

</script>
<style scoped>
#menuCtrl:checked + div ul{
  top:70px;
}
</style>