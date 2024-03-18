<template>
    
    <div style="background-image: url(/image_background.svg)" class="bg-cover bg-left-top w-full h-[730px] md:h-[650px] text-white">
      <TopMenu />
      <div class="h-100 w-5/6 mx-auto mt-20">
        <div class="text-5xl pb-3">Exclusive</div>
        <div class="text-5xl pb-3">Boutique</div>
        <div class="text-5xl pb-3">Hotel</div>
        <div class="pt-2">Luxury Boutique Hotel</div>
        <div class="flex py-10">
          <div class="border border-gray-500 rounded-full w-9 h-9 flex items-center mr-1.5">
            <SvgIcon name="img_FB" class="w-2/5 h-2/5 ml-2.5" color="white"/>
          </div>
          <div class="border border-gray-500 rounded-full w-9 h-9 flex items-center mr-1.5">
            <SvgIcon name="twitter" class="w-1/2 h-1/2 ml-2" color="white"/>
          </div>
          <div class="border border-gray-500 rounded-full w-9 h-9 flex items-center mr-1.5">
            <SvgIcon name="img_ig" class="w-2/5 h-2/5 ml-2.5" color="white"/>
          </div>
        </div>
      </div>
      <TopInfo />
    </div>
    

</template>

<script setup>
import TopMenu from './TopMenu.vue'
import TopInfo from './TopInfo.vue'
import SvgIcon from './SvgIcon.vue';

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