<template>
  <view class="fv-page flex flex-col px-4" style="">
    <!--    <up-navbar class="" style="" :autoBack="true" bgColor="#06D0BCFF" :fixed="true" :placeholder="true" title="个人信息"
      titleColor="#FFFFFFFF" leftIconColor="#FFFFFFFF">
    </up-navbar> -->
    <view class="flex box-border mb-3">
      <up-cell-group class="mb-3">
        <up-cell class="" title="头像" :border="true" :isLink="true" :clickable="true">
          <template v-slot:right-icon>
            <up-avatar :src="src" shape="circle"></up-avatar>
          </template>
        </up-cell>
        <up-cell class="" style="" title="用户名" value="张三" :border="true" :isLink="true">
        </up-cell>
        <up-cell class="" style="" title="关联手机" value="18827637106" :border="true" :isLink="true">
        </up-cell>
        <up-cell class="" style="" title="性别" value="先生" :isLink="true">
        </up-cell>
      </up-cell-group>
    </view>
  </view>
</template>
<script setup>
  import {
    ref,
    reactive,
    watch,
    computed,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate,
    onUpdated,
    nextTick,
    defineProps,
    toRaw
  } from 'vue'
  import {
    onLoad,
    onShow
  } from '@dcloudio/uni-app'
  let src = ref('https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg');
  // 页面加载
  onLoad((options) => {
    loadData()
  })

  onShow(() => {})

  // 数据列表
  const listLoading = ref(false)
  const dataList = ref([])
  const dataPage = ref({
    page: 0,
    limit: 10,
    total: 0
  })

  // 加载数据
  const loadData = (refresh = false) => {
    listLoading.value = true
    // 请求接口
    listLoading.value = false
  }
</script>



<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
