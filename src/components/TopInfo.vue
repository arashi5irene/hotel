<template>
  <div class="w-5/6 rounded-xl bg-[#244765] h-[480px] sm:h-56 md:h-28 mx-auto flex flex-wrap items-center relative mt-2 shadow-xl">
    <div class="w-full sm:w-1/2 md:w-1/4 infoArea">
        <div class="infoTitle">ARRIVAL</div>
        <div class="w-4/5 mx-auto flex">
            <span class="text-4xl">18</span>
            <div>
                <span class="text-sm flex items-end mx-2">
                    Oct, 2019
                    <SvgIcon name="button_onlyDropDown" class="w-2 h-2 ml-2 mb-1" color="white"/>    
                </span>
                <span class="text-xs text-gray-400 mx-2">Friday</span>
            </div>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 infoArea">
        <div class="infoTitle">DEPATURE</div>
        <div class="w-4/5 mx-auto flex">
            <span class="text-4xl">19</span>
            <div>
                <span class="text-sm flex items-end mx-2">
                    Oct, 2019
                    <SvgIcon name="button_onlyDropDown" class="w-2 h-2 ml-2 mb-1" color="white"/>    
                </span>
                <span class="text-xs text-gray-400 mx-2">Saturday</span>
            </div>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 h-28 flex justify-center">
        <div class="infoArea w-1/2 flex justify-center sm:border-b-0 border-r">
            <div class="infoTitle text-center w-full">ADULTS</div>
            <div class="flex justify-center">
                <span class="my-1 cursor-pointer hover:text-orange-200" @click="minusAdult">-</span>
                <span class="text-4xl mx-3">{{adultsCnt}}</span>
                <span class="my-1 cursor-pointer hover:text-orange-200" @click="addAdult">+</span>
            </div>
        </div>
        <div class="infoArea w-1/2 flex justify-center">
            <div class="infoTitle text-center w-full">CHILDREN</div>
            <div class="flex justify-center">
                <span class="my-1 cursor-pointer hover:text-orange-200" @click="minusChildren">-</span>
                <span class="text-4xl mx-3">{{childrenCnt}}</span>
                <span class="my-1 cursor-pointer hover:text-orange-200" @click="addChildren">+</span>
            </div>
        </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 h-28 flex items-center">
        <div class="rounded-full bg-[#baff7a] text-[13px] text-slate-500 w-3/4 h-9 mx-auto text-center leading-9 cursor-pointer hover:text-orange-400">
            CHECK AVAILABILTY
        </div>
    </div>
    <div class="w-full h-5 absolute -bottom-0.5">
        <SvgIcon name="button_dropDown" class="w-9 h-9 mx-auto" color="white"/>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from './SvgIcon.vue';
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
let adultsCnt = ref(2)
const addAdult = ()=>{
    adultsCnt.value = adultsCnt.value>=9?adultsCnt.value:adultsCnt.value+1
}
const minusAdult = ()=>{
    adultsCnt.value = adultsCnt.value==1?adultsCnt.value:adultsCnt.value-1
}
let childrenCnt = ref(0)
const addChildren = (x)=>{
    childrenCnt.value = childrenCnt.value>=9?childrenCnt.value:childrenCnt.value+1
}
const minusChildren = ()=>{
    childrenCnt.value = childrenCnt.value==0?childrenCnt.value:childrenCnt.value-1
}
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
  adultsCnt,
  childrenCnt
})

</script>
<style scoped>
.infoArea{
    @apply border-slate-600 h-28 top-1/2 sm:border-r border-b md:border-b-0 flex flex-wrap content-center;
}
.infoTitle{
    @apply text-xs text-gray-400 w-4/5 h-1/4 mx-auto pb-3 text-xs top-1/4;
}
</style>