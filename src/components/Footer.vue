<template>
    <div class="bg-[#244765] bg-left-top w-full h-[330px] md:h-[230px] text-white flex items-center">
        <div class="w-5/6 flex flex-wrap md:flex-nowrap justify-between h-[230px] items-center mx-auto">
            <div class="w-3/4 flex flex-wrap">
                <div class="text-4xl w-full pb-1 sm:pb-5">HOTEL</div>
                <div class="flex text-sm mr-5">
                    <SvgIcon name="Image_phone" class="w-[13px] h-[13px] mr-2 mt-1" color="white"/>
                    (4321)0987-654-320
                </div>
                <div class="flex text-sm mr-5">
                    <SvgIcon name="Image_mail" class="w-[13px] h-[13px] mr-2 mt-1" color="white"/>
                    support@hotel.com
                </div>
                <div class="flex text-sm text-gray-400">
                    <SvgIcon name="Image_location" class="w-[13px] h-[13px] mr-2 mt-1" color="white"/>
                    33 Jaja Park Rd, Yellow, USA
                </div>
            </div>
            <div class="w-full sm:w-2/5">
                <div class="text-lg pb-2">Subscribe</div>
                    <input type="text" placeholder="Email" class="h-8 w-52 px-3 text-sm text-black" :value="userEmail">
                <div class="text-xs text-gray-400 py-2">No Spam.Only profit.</div>
            </div>
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
const userEmail = ref()
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
  ...toRefs(userEmail)
})

</script>
<style scoped lang='less'>
</style>