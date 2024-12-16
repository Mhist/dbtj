<template>
  <view class="xxx-content">

  </view>
</template>

<script setup>
  import {
    onLoad
  } from '@dcloudio/uni-app';
  onLoad((options) => {
    console.log(options.buyMode,"options");
  })
</script>

<style lang="scss" scoped>
  .xxx-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102px);

    .good-wrap {
      padding: 0 16rpx;
      margin-top: 20rpx;
      padding-bottom: 180rpx; // 购物车结算栏 102rpx + margin-bottom 12rpx + 单行商品的一半 153/2 = 75+1.5 = 76.5rpx
      }
}
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>

