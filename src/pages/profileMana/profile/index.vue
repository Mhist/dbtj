<template>
  <view class="xxx-content">
  个人资料
  </view>
</template>

<script setup lang="js">
  import {
    reactive,
    ref,
  } from 'vue';
</script>

<style lang="scss" scoped>
  .xxx-content {
    // padding: 0 16rpx;
    max-height: calc(100vh - 102rpx);

    .good-wrap {
      padding: 0 16rpx;
      margin-top: 20rpx;
      padding-bottom: 180rpx; // 购物车结算栏 102rpx + margin-bottom 12rpx + 单行商品的一半 153/2 = 75+1.5 = 76.5rpx

      .single-good {
        margin-bottom: 12rpx;
        padding-bottom: 20rpx;
        width: 100%;
        height: 153rpx;
        background: #FFFFFF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
      }
    }

    .collect-wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 102rpx;
      background: #FFFF00;
      border-radius: 12rpx 12rpx 0rpx 0rpx;

    }
  }
</style>

<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
