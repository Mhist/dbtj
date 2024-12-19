<template>
  <view class="profile-wrap fv-page flex flex-col px-4" style="">
    <!--    <up-navbar class="" style="" :autoBack="true" bgColor="#06D0BCFF" :fixed="true" :placeholder="true" title="个人信息"
      titleColor="#FFFFFFFF" leftIconColor="#FFFFFFFF">
    </up-navbar> -->
    <view class="profile flex box-border mb-3">
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

    <view class="save-button-wrap">
      <up-button @click="" style="color: #F7F7F7" class="save-button" color="#2583B7" shape="circle" text="保存" />
      <up-button @click="" style="color: #2583B7" class="exit-button mt-20rpx" shape="circle" text="退出登录" />
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


<style lang="scss" scoped>
  .profile-wrap {
    margin-top: 20rpx;
    padding: 0 20rpx;



    .profile {
      background-color: #FFF;
      box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0, 0, 0, 0.16);
      border-radius: 12rpx 12rpx 12rpx 12rpx;
    }


    .save-button-wrap {
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 20rpx;
      right: 20rpx;
      bottom: 40rpx;

      .save-button {
        height: 62rpx;
        background: $u-primary;
        border-radius: 31rpx;
      }

      .exit-button {
        height: 62rpx;
        border-radius: 31rpx 31rpx 31rpx 31rpx;
        border: 1rpx solid $u-primary;
      }
    }
  }
</style>
<style lang="scss">
  page {


    background-color: #efeff4;
  }
</style>
