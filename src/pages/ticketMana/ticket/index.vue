<template>
  <view>
    <up-sticky bgColor="#fff">
      <up-tabs @click="tabClick" :list="list1" lineWidth="0" lineColor="#07C160" :activeStyle="{
            color: '#333',
            fontWeight: 'bold',
            transform: 'scale(1.05)',

        }" :inactiveStyle="{
            color: '#666666',
            transform: 'scale(1)'
        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></up-tabs>
    </up-sticky>

    <view v-if="showLeft" class="collect-wrap">
      <view class="collect-single" v-for="(item,index) in collectList">
        <view class="single-top">
          <view class="order-number">
            订单号：{{item.orderNumber}}
          </view>
          <view class="order-name">
            {{item.name}}
          </view>
          <view class="order-get-method">
            获取方式：{{item.acquisitionMethod}}
          </view>
          <view class="order-date">
            获取方式：{{item.date}}
          </view>
        </view>
        <view class="single-bottom">
          <up-button @click="reissueInvoice" style="margin-right: 20rpx;" size="mini" color="#081E7E" :plain="true"
            text="使用"></up-button>
          <up-button @click="reapplyInvoice" size="mini" color="#081E7E" :plain="true" text="赠送"></up-button>
          <up-button @click="reapplyInvoice" size="mini" color="#081E7E" :plain="true" text="查看详情"></up-button>
        </view>
      </view>
    </view>
    <view v-else="showLeft" class="record-wrap">

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


  // 创建响应式数据
  const list1 = reactive([{
      name: '拥有'
    },
    {
      name: '记录'
    }
  ]);

  let showLeft = ref(true);

  const tabClick = (item) => {
    if (item.name === '拥有') {
      showLeft.value = true;
    } else {
      showLeft.value = false;
    }
  };
  // 页面加载
  onLoad((options) => {
    loadData()
  });

  onShow(() => {});

  // 数据列表
  const listLoading = ref(false)
  const dataList = ref([])
  const dataPage = ref({
    page: 0,
    limit: 10,
    total: 0
  });
  // 提货券数据
  const collectList = ref([{
      id: 1,
      name: '酒+字画+太岁水 (商品种类)',
      acquisitionMethod: '自购',
      date: '2024-12-03 23:00:32',
      orderNumber: '1234xdftr56ygt23456hbn896',
    },
    {
      id: 2,
      name: '佛手手',
      acquisitionMethod: '好友赠送',
      date: '2024-12-03 23:00:32',
      orderNumber: '1234xdftr56ygt23456hbn896',
    },
    {
      id: 3,
      name: '太岁水',
      acquisitionMethod: '自购',
      date: '2024-12-03 23:00:32',
      orderNumber: '1234xdftr56ygt23456hbn896',
    },
    {
      id: 4,
      name: '大师字画',
      acquisitionMethod: '自购',
      date: '2024-12-03 23:00:32',
      orderNumber: '1234xdftr56ygt23456hbn896',
    }
  ]);

  // 加载数据
  const loadData = (refresh = false) => {
    listLoading.value = true
    // 请求接口
    listLoading.value = false
  };
</script>


<style lang="scss" scoped>
  .collect-wrap {
    padding: 0 20rpx;

    .collect-single {
      margin: 20rpx 0;

      .single-top {
        background-color: #fff;
        height: 140rpx;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        padding-left: 20%;
        padding-top: 20rpx;
        padding-bottom: 20rpx;

        .order-number {
          height: 22rpx;
          font-size: 16rpx;
          color: $u-dbtj-label-right-order-color;
          line-height: 16rpx;
          text-align: right;
          font-style: normal;
          text-transform: none;
        }

        .order-name {}

        .order-get-method {}

        .order-date {}


      }

      .single-bottom {
        background-color: #fff;
        height: 45rpx;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        display: flex;
        justify-content: flex-end;
      }


    }


  }

  ::v-deep .u-tabs__wrapper__nav {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-around;
  }
</style>
<style lang="scss">
  page {
    background-color: #efeff4;
  }
</style>
