<template>
  <div class="bg-slate-100 bg-left-top w-full h-[1100px] md:h-[650px] flex justify-center text-slate-600">
      <div class="w-5/6 flex flex-wrap justify-center">
          <div class="w-4/5 md:w-1/2 pt-72 sm:pt-18 sm:pt-32 md:my-52 md:pt-0">
              <div class="text-[40px] leading-10">Luxury Plaza</div>
              <div class="text-[40px] leading-10">Hotel for You</div>
              <div class="text-sm w-3/4 text-[#BEBEBE] py-5">Distant orb has power to raise and purify our thought like a strain fo sacred music</div>
              <div class="text-sm border border-slate-300 rounded-full h-9 w-36 text-center leading-8 my-2 text-gray-500 cursor-pointer  hover:text-orange-400">About US</div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center md:justify-end items-start md:items-center">
            <div class="w-[95%] relative max-w-[500px]">
              <img src="../assets/image_item.svg">
              <div class="w-full h-[110px] bg-white absolute top-[87%] md:top-[75%] lg:top-[80%] rounded-b-3xl flex items-center shadow-xl">
                  <img class="w-[60px] mx-5 cursor-pointer" src="../assets/button_player.svg">
                  <div class="flex flex-wrap h-[60px]">
                    <span class="w-full text-lg">Play video</span>
                    <span class="text-sm text-[#BEBEBE]">2:34</span>
                  </div>
              </div>
            </div>
            
            <!-- <div style="background-image: url(src/assets/image_item.svg)" class="w-[95%] h-full bg-contain bg-no-repeat right-0 absolute"> -->

            <!-- </div> -->
          </div>
      </div>
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