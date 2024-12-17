<template>
  <view class="order-confirm-content">
    <view class="content-wrap">
      <view class="address-wrap">

      </view>
      <view class="good-wrap">

      </view>
      <view class="pay-wrap"></view>
    </view>
  </view>
</template>

<script setup>
  import {
    onLoad
  } from '@dcloudio/uni-app';
  let buyMode = ref();

  onLoad((options) => {
    console.log(options.buyMode, "options");
    buyMode.value = options.buyMode;
  })
</script>

<style lang="scss" scoped>
  .order-confirm-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102px);

    .content-wrap {
      padding: 0 16rpx;
      margin-top: 20rpx;
      background-color: red;
      max-height: 100vh;

      .address-wrap {
        width: 718rpx;
        height: 129rpx;
        background: #FFFFFF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
      }

      .good-wrap {}

      .pay-wrap {}
    }
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
