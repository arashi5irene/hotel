<template>
  <div class="w-full h-14 flex p-1 justify-between">
    <div class="p-2">Hotel</div>
    <ul class="flex justify-center p-2">
        <li>About</li>
        <li>Service</li>
        <li>Rooms</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>
    <div class="p-2">Sign Up</div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
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
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>